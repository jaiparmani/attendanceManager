from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here


class User(models.Model):
    name = models.CharField(max_length=30)
    username = models.CharField(max_length=50, unique=True, default = 'not known')
    password = models.CharField(max_length=15)
    def __str__(self):
        return self.username



class Subjects(models.Model):
    subjectId = models.IntegerField(unique=True)
    subjectName = models.CharField(max_length=50)
    noOfLecturesAttended = models.IntegerField()
    noOfLecturesNotAttended = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    def __str__(self):
        return self.subjectName
    

    @property
    def attendancePercentage(self):
        return (self.noOfLecturesAttended)*1.0/(self.noOfLecturesAttended+self.noOfLecturesNotAttended)*100
    
