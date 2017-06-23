from rest_framework import serializers

from cram_api.models.course_model import Course


class CourseSerializer(serializers.ModelSerializer):
    teacher_name = serializers.ReadOnlyField(source='teacher.name')

    class Meta:
        model = Course
        fields = (
            'id',
            'teacher',
            'teacher_name',
            'space',
            'subject',
            'grade',
            'day',
            'start_at',
            'end_at',
            'student_number',
            'created_at'
        )
