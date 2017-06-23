from rest_framework import serializers

from cram_api.models.student_model import StudentCourse


class StudentCourseSerializer(serializers.ModelSerializer):
    owner_name = serializers.ReadOnlyField(source='owner.name')
    course_teacher = serializers.ReadOnlyField(source='course.teacher.name')
    course_grade = serializers.ReadOnlyField(source='course.grade')
    course_day = serializers.ReadOnlyField(source='course.day')
    course_subject = serializers.ReadOnlyField(source='course.subject')
    course_start_at = serializers.ReadOnlyField(source='course.start_at')
    course_end_at = serializers.ReadOnlyField(source='course.end_at')

    class Meta:
        model = StudentCourse
        fields = (
            'id',
            'owner',
            'owner_name',
            'course',
            'course_teacher',
            'course_grade',
            'course_day',
            'course_subject',
            'course_start_at',
            'course_end_at',
            'created_at'
        )
