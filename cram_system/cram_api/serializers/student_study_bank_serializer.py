from rest_framework import serializers

from cram_api.models.student_model import StudentStudyBank


class StudentStudyBankSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentStudyBank
        fields = (
            'id',
            'owner',
            'balance',
            'updated_at',
            'created_at'
        )
