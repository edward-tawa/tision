from django.shortcuts import render

from .models import User, Post
from .serializers import UserSerializer, PostSerializer
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


class PostListCreate(generics.ListCreateAPIView):
