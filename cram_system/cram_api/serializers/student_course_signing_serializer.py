from rest_framework import serializers

from cram_api.models.student_model import StudentCourseSigning


class StudentCourseSigningSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentCourseSigning
        fields = (
            'id',
            'owner',
            'course',
            'date',
            'sign',
            'leave',
            'created_at'
        )
