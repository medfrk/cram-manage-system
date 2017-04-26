from rest_framework import serializers

from cram_api.models.student_model import StudentCourse


class StudentCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentCourse
        fields = (
            'owner',
            'course',
            'created_at'
        )
