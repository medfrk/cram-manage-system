from rest_framework import serializers

from cram_api.models.student_model import StudentStudy


class StudentStudySerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentStudy
        fields = (
            'id',
            'owner',
            'seat',
            'day',
            'start_at',
            'end_at',
            'created_at'
        )
