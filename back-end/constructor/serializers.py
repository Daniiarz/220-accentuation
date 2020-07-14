from rest_framework import serializers

from .models import Site
from .tasks import create_static_site


class GrayscaleSerializer(serializers.Serializer):
    """
    Serializing incoming data from front-end
    """
    aboutDesc1 = serializers.CharField()
    aboutDesc2 = serializers.CharField()
    aboutDesc3 = serializers.CharField()
    aboutText1 = serializers.CharField()
    aboutText2 = serializers.CharField()
    aboutText3 = serializers.CharField()
    address = serializers.CharField()
    brandText = serializers.CharField()
    email = serializers.EmailField()
    homeDesc = serializers.CharField()
    homeText = serializers.CharField()
    phone = serializers.CharField()

    def create(self, **kwargs):
        validated_data = self.validated_data
        title = validated_data["brandText"].lower()
        sites = Site.objects.filter(name=title)
        if sites.exists():
            raise ValueError("This domain is already taken, and why do you know this endpoint?")

        create_static_site.delay(validated_data, title, "grayscale")
