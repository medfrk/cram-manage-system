from rest_framework import serializers

from cram_api.models.space_model import Space


class SpaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Space
        fields = (
            'id',
            'name',
            'kind',
            'capacity',
            'created_at'
        )
