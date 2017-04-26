from rest_framework import serializers

from cram_api.models.student_model import StudentMealsBank


class StudentMealsBankSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentMealsBank
        fields = (
            'owner',
            'money',
            'note',
            'balance',
            'created_at'
        )
