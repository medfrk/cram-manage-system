from rest_framework import serializers

from cram_api.models.student_model import StudentStudyBank


class StudentStudyBankSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentStudyBank
        fields = (
            'owner',
            'balance',
            'created_at'
        )
