from rest_framework import serializers

from cram_api.models.course_model import CourseNote


class CourseNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseNote
        fields = (
            'owner',
            'content',
            'created_by',
            'created_at'
        )
