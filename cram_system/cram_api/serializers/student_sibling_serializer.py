from rest_framework import serializers

from cram_api.models.student_model import StudentSibling


class StudentSiblingSerializer(serializers.ModelSerializer):
    owner_name = serializers.ReadOnlyField(source='owner.name')

    class Meta:
        model = StudentSibling
        fields = (
            'id',
            'owner',
            'owner_name',
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
