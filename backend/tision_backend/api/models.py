from django.db import models

class User(models.Model):
    id = models.IntegerField(primary_key=True)
    firstname = models.CharField(max_length=30)
    lastname = models.CharField(max_length=30)
    email = models.EmailField(max_length=30)
    password = models.CharField(max_length=20)


class Post(models.Model):
    title = models.CharField(max_length=200)
    details = models.TextField()
    date = models.DateField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)


