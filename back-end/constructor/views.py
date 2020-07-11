from rest_framework.generics import GenericAPIView

from .serializers import SiteSerializer


class CreateSiteView(GenericAPIView):
    serializer_class = SiteSerializer

    def post(self, request, *args, **kwargs):
        """
        Create new nginx config and static files for site
        """
        pass
