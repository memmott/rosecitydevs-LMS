from django.shortcuts import render
from .models import Course

# Create your views here.

def post_list(request):
    return render(request, 'templates/course_list.html', {})