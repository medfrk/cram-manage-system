from rest_framework import serializers

from cram_api.models.account_model import Account


class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = (
            'id',
            'name',
            'email',
            'password',
            'updated_at',
            'created_at'
        )
