from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from django.conf import settings
from django.urls import path
import os



class User(AbstractUser):
    id = models.IntegerField(primary_key=True)
    #username = models.CharField(max_length=50, unique=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField( max_length=100)
    password = models.CharField(max_length=200)
    bio = models.TextField(blank=True)
    




class Post(models.Model):

    def upload_to(instance, filename):
        return "media/{filename}".format(filename=filename)

    id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=200, blank=True, null=True)
    post_info = models.TextField(blank=True, null=True)
    video_info = models.TextField(blank=True, null=True)
    picture_info = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    image = models.FileField(upload_to="photos/", blank=True, null=True)
    video = models.FileField(upload_to="videos/", blank=True, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="posts")


    def __str__(self) -> str:
        return self.title



class Friends(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="friend")


