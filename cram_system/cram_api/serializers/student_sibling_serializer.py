from rest_framework import serializers

from cram_api.models.student_model import StudentSibling


class StudentSiblingSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentSibling
        fields = (
            'owner',
            'name',
            'grade',
            'school',
            'phone',
            'note',
            'contact_name',
            'contact_relationship',
            'contact_phone',
            'created_at'
        )
