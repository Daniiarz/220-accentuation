from rest_framework import serializers

from constructor.serializers import SiteSerializer
from .models import User


class UserSerializer(serializers.ModelSerializer):
    """
    Serializing User instances
    """
    sites = SiteSerializer(read_only=True, many=True)

    class Meta:
        model = User
        fields = (
            "email",
            "first_name",
            "last_name",
            "max_amount",
            "is_premium",
            "sites"
        )
