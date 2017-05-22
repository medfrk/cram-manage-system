from rest_framework import serializers

from cram_api.models.student_model import StudentStudyBankLog


class StudentStudyBankSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentStudyBankLog
        fields = (
            'owner',
            'balance',
            'money',
            'note',
            'updated_at',
            'created_at'
        )
