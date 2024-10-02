from django.contrib import admin
from .models import User, Post

class UserAdmin(admin.ModelAdmin):
    list_display = ("first_name", "last_name", "email", "bio", "password", "id")
admin.site.register(User, UserAdmin)

class PostAdmin(admin.ModelAdmin):
    list_display = ("title", "post_info", "video_info", "picture_info", "created_at", "image", "video", "user")
admin.site.register(Post, PostAdmin)
