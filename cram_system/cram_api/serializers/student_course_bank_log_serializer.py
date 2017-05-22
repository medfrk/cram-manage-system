from rest_framework import serializers

from cram_api.models.student_model import StudentCourseBankLog


class StudentCourseBankSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentCourseBankLog
        fields = (
            'id',
            'owner',
            'course',
            'balance',
            'money',
            'note',
            'updated_at',
            'created_at'
        )
