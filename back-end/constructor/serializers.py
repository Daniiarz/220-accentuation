from django.core.files.storage import FileSystemStorage
from django.utils.text import slugify
from rest_framework import serializers

from .models import Site, Template
from .tasks import create_static_site
from .utils import grayscale_img_routine


class SiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Site
        fields = (
            "name",
            "created"
        )


class TemplateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Template
        fields = (
            "name",
            "sample_link",
            "constructor_link",
        )


class GrayscaleSerializer(serializers.Serializer):
    """
    Serializing incoming data from front-end
    """
    aboutDesc1 = serializers.CharField()
    aboutDesc2 = serializers.CharField()
    aboutDesc3 = serializers.CharField()
    aboutText1 = serializers.CharField(max_length=100)
    aboutText2 = serializers.CharField(max_length=100)
    aboutText3 = serializers.CharField(max_length=100)
    address = serializers.CharField(max_length=50)
    brandText = serializers.CharField(max_length=50)
    email = serializers.EmailField()
    homeDesc = serializers.CharField()
    homeText = serializers.CharField()
    phone = serializers.CharField()
    mastheadImg = serializers.ImageField(allow_null=True, allow_empty_file=True)
    mastheadColor = serializers.CharField(max_length=50,)
    aboutImg1 = serializers.ImageField(allow_null=True, allow_empty_file=True)
    aboutImg2 = serializers.ImageField(allow_null=True, allow_empty_file=True)
    aboutImg3 = serializers.ImageField(allow_null=True, allow_empty_file=True)

    def create(self, **kwargs):
        validated_data = self.validated_data
        title = validated_data["brandText"]
        sites = Site.objects.filter(name=title.lower())

        location_url = f"media/sites/grayscale/{slugify(title.lower())}/"
        file_system = FileSystemStorage(location=location_url, base_url=location_url)

        validated_data, specific_data = grayscale_img_routine(validated_data, file_system)

        if sites.exists():
            raise ValueError("This domain is already taken, and why do you know this endpoint?")

        create_static_site.delay(validated_data, title, "grayscale", specific_data, kwargs["user_id"])
