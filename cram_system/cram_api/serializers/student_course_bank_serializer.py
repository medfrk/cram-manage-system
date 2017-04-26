from rest_framework import serializers

from cram_api.models.student_model import StudentCourseBank


class StudentCourseBankSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentCourseBank
        fields = (
            'owner',
            'course',
            'balance',
            'created_at'
        )
