from rest_framework import serializers

from cram_api.models.student_model import StudentStudySigning


class StudentStudySigningSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentStudySigning
        fields = (
            'owner',
            'date',
            'finish_previous',
            'sign',
            'finish_homework',
            'finish_quiz',
            'finish_plan',
            'left',
            'updated_at',
            'created_at'
        )
