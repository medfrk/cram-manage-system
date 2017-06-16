from rest_framework import serializers

from cram_api.models.student_model import StudentStudyBankLog


class StudentStudyBankLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentStudyBankLog
        fields = (
            'id',
            'owner',
            'balance',
            'money',
            'note',
            'updated_at',
            'created_at'
        )
