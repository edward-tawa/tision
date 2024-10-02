from rest_framework import serializers
#from django.contrib.auth.models import User
from .models import User, Post

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["email", "first_name", "last_name", "password", "username", "bio"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user



class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ["title", "post_info", "video_info", "picture_info","created_at", "image", "video", "user"]
        extra_kwargs = {"user":{"read_only": True}}