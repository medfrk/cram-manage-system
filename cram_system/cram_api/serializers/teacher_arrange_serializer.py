from rest_framework import serializers

from cram_api.models.teacher_model import TeacherArrange


class TeacherArrangeSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeacherArrange
        fields = (
            'id',
            'owner',
            'day',
            'position',
            'start_at',
            'end_at',
            'created_at'
        )
