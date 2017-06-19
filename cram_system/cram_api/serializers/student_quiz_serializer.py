from rest_framework import serializers

from cram_api.models.student_model import StudentQuiz


class StudentQuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentQuiz
        fields = (
            'id',
            'owner',
            'date',
            'subject',
            'range',
            'print_out',
            'finish',
            'score',
            'note',
            'created_at'
        )
