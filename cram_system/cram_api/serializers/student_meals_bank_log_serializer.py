from rest_framework import serializers

from cram_api.models.student_model import StudentMealsBankLog


class StudentMealsBankLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentMealsBankLog
        fields = (
            'owner',
            'balance',
            'money',
            'note',
            'updated_at',
            'created_at'
        )
