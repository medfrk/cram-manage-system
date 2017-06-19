from django.utils import timezone

from cram_api.models.student_model import Student, StudentPlan, StudentQuiz

"""
Provide services for making examination papers.
"""


def datetime_gen(date):
    split_date = date.split("-")
    result = timezone.datetime(
        year=int(split_date[0]),
        month=int(split_date[1]),
        day=int(split_date[2])
    )
    return result


def get_plans_by_subject_and_date_range(subject, date_start, date_end):
    d_start = datetime_gen(date_start)
    d_end = datetime_gen(date_end)

    plan_list = StudentPlan.objects.filter(subject=subject, need_quiz=True, date__range=[d_start, d_end]).order_by('range')

    content = []
    for plan in plan_list:
        obj = {
            "plan_id": str(plan.id),
            "owner_name": plan.owner.name,
            "owner_grade": plan.owner.grade,
            "owner_school": plan.owner.school,
            "plan_date": plan.date,
            "plan_range": plan.range,
            "plan_note": plan.note,
            "print_out": plan.print_out,
        }
        content.append(obj)

    result = {
        "subject": subject,
        "plan_list": content,
    }

    return result


def get_quizzes_by_date(date):
    d = datetime_gen(date)

    quiz_list = StudentQuiz.objects.filter(date=d).order_by('subject', 'range')

    content = []
    for quiz in quiz_list:
        obj = {
            "quiz_id": str(quiz.id),
            "owner_name": quiz.owner.name,
            "owner_grade": quiz.owner.grade,
            "owner_school": quiz.owner.school,
            "quiz_date": quiz.date,
            "subject": quiz.subject,
            "quiz_range": quiz.range,
            "quiz_note": quiz.note,
            "print_out": quiz.print_out,
        }
        content.append(obj)

    result = {
        "quiz_list": content,
    }

    return result
