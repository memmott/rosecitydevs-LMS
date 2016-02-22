from django.shortcuts import render


def home(request):
    return render(request, 'home.html')


def student_view(request):
    return render(request, 'student.html')


def teacher_view(request):
    return render(request, 'teacher.html')


def quiz_view(request):
    return render(request, 'quiz.html')


def parent_view(request):
    return render(request, 'parent.html')
