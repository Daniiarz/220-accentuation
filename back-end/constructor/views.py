from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.generics import GenericAPIView, ListAPIView
from rest_framework.response import Response
from rest_framework.settings import api_settings

from .serializers import GrayscaleSerializer, TemplateSerializer
from .models import Site, Template


class TemplatesView(ListAPIView):
    """
    Listing all available templates
    """
    serializer_class = TemplateSerializer
    queryset = Template.objects.all()


# @api_view(['POST'])
# def constructor_view(request):
#     template_name = request.POST.get("templateName", "")
#     # if template_name.lower() == "grayscale":
#     #     serializer_class = GrayscaleSerializer
#     # else:
#     #     return Response({
#     #         "message": "No such templates exists!"},
#     #         status=status.HTTP_400_BAD_REQUEST
#     #     )
#     serializer_class = GrayscaleSerializer
#     serializer = serializer_class(data=request.data)
#     serializer.is_valid(raise_exception=True)
#     serializer.create()
#
#     return Response({
#         "message": "site created successfully"},
#         status=status.HTTP_201_CREATED,
#     )

class ConstructorView(GenericAPIView):
    serializer_class = GrayscaleSerializer

    def post(self, request, *args, **kwargs):
        """
        Create new nginx config and static files for site
        """
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.create()
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
    title = request.POST.get("title", "")
    try:
        Site.objects.get(name=title)
        return Response({"message": "This domain is already been taken"}, status=status.HTTP_400_BAD_REQUEST)
    except Site.DoesNotExist:
        return Response({"message": "This domain is free"}, status=status.HTTP_200_OK)
