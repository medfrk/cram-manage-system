from rest_framework import serializers

from cram_api.models.teacher_model import TeacherNote


class TeacherNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeacherNote
        fields = (
            'owner',
            'content',
            'created_by',
            'updated_at',
            'created_at'
        )
