from rest_framework import serializers

from .models import User
from constructor.serializers import SiteSerializer

from allauth.account.adapter import get_adapter
from allauth.utils import email_address_exists
from allauth.account.utils import setup_user_email


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
