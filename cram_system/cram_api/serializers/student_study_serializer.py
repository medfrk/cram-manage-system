from rest_framework import serializers

from cram_api.models.student_model import StudentStudy


class StudentStudySerializer(serializers.ModelSerializer):
    owner_name = serializers.ReadOnlyField(source='owner.name')

    class Meta:
        model = StudentStudy
        fields = (
            'id',
            'owner',
            'owner_name',
            'seat',
            'day',
            'start_at',
            'end_at',
            'created_at'
        )
