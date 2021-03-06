from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.generics import GenericAPIView, ListAPIView
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.settings import api_settings

from .serializers import GrayscaleSerializer, TemplateSerializer
from .models import Site, Template
from . import permissions as custom_permissions


class TemplatesView(ListAPIView):
    """
    Listing all available templates
    """
    serializer_class = TemplateSerializer
    queryset = Template.objects.all()


class ConstructorView(GenericAPIView):
    serializer_class = GrayscaleSerializer
    permission_classes = [permissions.IsAuthenticated, custom_permissions.MaxAmountNotExceeded]

    def post(self, request, *args, **kwargs):
        """
        Create new nginx config and static files for site
        """
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.create(user_id=request.user.id)
        headers = self.get_success_headers(serializer.data)

        return Response({
            "message": "site created successfully"},
            status=status.HTTP_201_CREATED,
            headers=headers
        )

    def get_success_headers(self, data):
        try:
            return {'Location': str(data[api_settings.URL_FIELD_NAME])}
        except (TypeError, KeyError):
            return {}


@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def check_titles(request):
    title = request.data.get("title")
    try:
        Site.objects.get(name=title)
        return Response({"message": "This domain is already been taken"}, status=status.HTTP_400_BAD_REQUEST)
    except Site.DoesNotExist:
        return Response({"message": "This domain is free"}, status=status.HTTP_200_OK)
