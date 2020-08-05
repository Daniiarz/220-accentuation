from rest_framework import serializers

from constructor.serializers import SiteSerializer
from .models import User


class UserSerializer(serializers.ModelSerializer):
    """
    Serializing User instances
    """
    sites = SiteSerializer(read_only=True, many=True)
    sites_left = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = (
            "email",
            "first_name",
            "last_name",
            "is_premium",
            "sites_left",
            "sites"
        )

    def get_sites_left(self, obj):
        return obj.max_amount - obj.sites_created
