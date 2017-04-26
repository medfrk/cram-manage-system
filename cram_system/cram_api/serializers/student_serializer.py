from rest_framework import serializers

from cram_api.models.student_model import Student


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = (
            'name',
            'nickname',
            'birthday',
            'grade',
            'school',
            'image',
            'phone',
            'address',
            'left',
            'note',
            'contact1_name',
            'contact1_relationship',
            'contact1_phone',
            'contact2_name',
            'contact2_relationship',
            'contact2_phone',
            'contact3_name',
            'contact3_relationship',
            'contact3_phone',
            'created_at'
        )
