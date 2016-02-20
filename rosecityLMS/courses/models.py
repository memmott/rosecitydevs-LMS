from django.db import models
from django.contrib.auth.models import Group, User


class Semester(models.Model):
    name = models.CharField(max_length = 200)
    year = models.IntegerField()
    start = models.DateField()
    end = models.DateField()

def __unicode__(self):
    return "%s %s" % (self.name, self.year)

class Course(models.Model):
    title = models.CharField(max_length = 200)
    section = models.CharField(max_length = 10)
    number = models.CharField(max_length = 10)
    semester = models.ForeignKey(Semester)
    
    faculty = models.CharField(max_length = 200)
    members = models.CharField(max_length = 200)
    

def __unicode__(self):
    return "%s" % (self.title)


class CourseEvent(models.Model):
    course = models.ForeignKey(Course)
    title = models.CharField(max_length = 200)
    start = models.TimeField()
    end = models.TimeField()



class Assignment(models.Model):
    course = models.ForeignKey(Course)
    title = models.CharField(max_length = 200)
    due_date = models.DateField(null = True)
    
    def __unicode__(self):
        return unicode(self.title)


