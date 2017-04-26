from rest_framework import serializers

from cram_api.models.course_model import Course


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = (
            'teacher',
            'space',
            'subject',
            'grade',
            'day',
            'start_at',
            'end_at',
            'student_number',
            'created_at'
        )
