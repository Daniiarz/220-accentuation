from django.db import IntegrityError
from rest_framework import serializers

from .models import Site
from .tasks import create_domain_record, create_static_site


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

    def create_site(self, validated_data):
        title = validated_data.pop("title").lower()
        sites = Site.objects.get(name=title)

        if sites.exists():
            raise IntegrityError("Site with this name is already exists!")

        # Execute creation of domain name
        create_domain_record(title)

        # Execute creation of static site
        create_static_site(validated_data, title)
