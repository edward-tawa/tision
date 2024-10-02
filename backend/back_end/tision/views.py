from django.shortcuts import render
from rest_framework import generics
from .serializers import UserSerializer, PostSerializer
from .models import User, Post
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.core.exceptions import ValidationError


class CreateUserView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return User.object.all()

class UserListView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class PostListCreateView(generics.ListCreateAPIView):
   serializer_class =  PostSerializer
   permission_classes = [IsAuthenticated]

   def get_queryset(self):
       user = self.request.user
       return Post.objects.filter(user=user)


   def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(user=self.request.user)
        else:
            print(serializer.errors)

class PostDeleteView(generics.DestroyAPIView):
    serializer_class = PostSerializer
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Post.objects.filter(user=user)[:5]





