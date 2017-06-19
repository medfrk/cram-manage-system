from django.utils import timezone
from datetime import timedelta

from cram_api.models.student_model import StudentNote
from cram_api.models.course_model import CourseNote


def datetime_gen(date):
    split_date = date.split("-")
    result = timezone.datetime(
        year=int(split_date[0]),
        month=int(split_date[1]),
        day=int(split_date[2])
    )
    return result


def get_student_note_by_date(date):
    d = datetime_gen(date)
    filter_start = d - timedelta(0)
    filter_end = d + timedelta(1)

    note_list = StudentNote.objects.filter(created_at__range=[filter_start, filter_end]).order_by('owner', '-created_at')

    content = []
    for note in note_list:
        obj = {
            "owner_name": note.owner.name,
            "kind": note.kind,
            "content": note.content,
            "created_by": note.created_by,
            "created_at": note.created_at,
        }
        content.append(obj)

    result = {
        "note_list": content,
    }
    return result


def get_course_note_by_date(date):
    d = datetime_gen(date)
    filter_start = d - timedelta(0)
    filter_end = d + timedelta(1)

    note_list = CourseNote.objects.filter(created_at__range=[filter_start, filter_end]).order_by('owner', '-created_at')

    content = []
    for note in note_list:
        obj = {
            "owner_name": note.owner.__str__(),
            "content": note.content,
            "created_by": note.created_by,
            "created_at": note.created_at,
        }
        content.append(obj)

    result = {
        "note_list": content,
    }
    return result
