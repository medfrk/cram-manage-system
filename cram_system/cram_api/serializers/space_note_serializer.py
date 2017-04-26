from rest_framework import serializers

from cram_api.models.space_model import SpaceNote


class SpaceNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = SpaceNote
        fields = (
            'owner',
            'content',
            'created_by',
            'created_at'
        )
