from rest_framework import serializers

from cram_api.models.teacher_model import Teacher


class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = (
            'name',
            'phone',
            'grade',
            'degree_university',
            'degree_master',
            'degree_doctor',
            'resume',
            'created_at'
        )
