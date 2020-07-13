from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.settings import api_settings

from .serializers import GrayscaleSerializer
from .models import Site


class ConstructorView(GenericAPIView):
    serializer_class = GrayscaleSerializer

    def post(self, request, *args, **kwargs):
        """
        Create new nginx config and static files for site
        """
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.create_site()
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
def check_titles(request):
    title = request.data["title"]

    site = Site.objects.get(name=title)
    if site.exists():
        return Response({"message": "This domain is already been taken"}, status=status.HTTP_400_BAD_REQUEST)

    return Response({"message": "This domain is free"}, status=status.HTTP_200_OK)
