from cram_api.models.student_model import Student, StudentMealsBank

"""
Provide Services for the interaction between Student and Meals
"""


def create_meals_bank_by_student_id(student_id):
    """
    Create meals bank for a specific student.
    """
    student = Student.objects.get(id=student_id)
    if StudentMealsBank.objects.filter(owner=student).exists():
        result = {
            'error': 'meals bank already exist',
            'student_name': student.name,
        }
    else:
        StudentMealsBank.objects.create(
            owner=student,
        )
        result = {
            'status': 'create meals bank success',
            'student_id': student_id,
            'student_name': student.name,
        }
    return result


def create_all_meals_bank():
    """
    Create all study bank for students.
    """
    students = Student.objects.all()
    content = []
    for student in students:
        content.append(create_meals_bank_by_student_id(student.id))
    result = {
        'log': content,
        'status': 'success',
    }
    return result
