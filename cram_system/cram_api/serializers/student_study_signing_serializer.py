from rest_framework import serializers

from cram_api.models.student_model import StudentStudySigning


class StudentStudySigningSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentStudySigning
        fields = (
            'owner',
            'date',
            'finish_previous',
            'sign_at',
            'sign',
            'leave',
            'create_quiz_at',
            'have_create_quiz',
            'finish_homework_at',
            'finish_homework',
            'finish_quiz_at',
            'finish_quiz',
            'finish_plan_at',
            'finish_plan',
            'left_at',
            'left',
            'updated_at',
            'created_at'
        )
