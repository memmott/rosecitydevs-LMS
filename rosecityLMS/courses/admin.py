from django.contrib import admin
from courses.models import Course, Semester, Assignment


admin.site.register(Course)
admin.site.register(Semester)
admin.site.register(Assignment)

# Register your models here.
