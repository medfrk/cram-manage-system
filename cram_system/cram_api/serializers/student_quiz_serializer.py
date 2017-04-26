from rest_framework import serializers

from cram_api.models.student_model import StudentQuiz


class StudentQuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentQuiz
        fields = (
            'owner',
            'date',
            'subject',
            'range',
            'finish',
            'score',
            'note',
            'created_at'
        )
