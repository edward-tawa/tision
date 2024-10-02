from django.urls import path
from . import views

urlpatterns = [
    path("posts/", views.PostListCreateView.as_view(), name="post-list"),
    path("users/", views.UserListView.as_view(), name="user-list"),
    path("posts/delete/<int:pk>/", views.PostDeleteView.as_view(), name="delete-note"),
]
