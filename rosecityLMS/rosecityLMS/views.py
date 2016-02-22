from django.shortcuts import render


def home(request):
    return render(request, 'home.html')


def student_view(request):
    return render(request, 'app/student/student.html')


def teacher_view(request):
    return render(request, 'app/teacher/teacher.html')


def quiz_view(request):
    return render(request, 'app/quiz/quiz.html')


def parent_view(request):
    return render(request, 'app/parent/parent.html')
