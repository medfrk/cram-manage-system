from rest_framework import serializers

from cram_api.models.student_model import StudentPlan


class StudentPlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentPlan
        fields = (
            'owner',
            'date',
            'subject',
            'need_quiz',
            'score',
            'finish_quiz',
            'finish',
            'note',
            'created_at'
        )
