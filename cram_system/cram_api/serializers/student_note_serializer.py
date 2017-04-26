from rest_framework import serializers

from cram_api.models.student_model import StudentNote


class StudentNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentNote
        fields = (
            'owner',
            'kind',
            'content',
            'created_by',
            'created_at'
        )
