from django.contrib import admin
from django.urls import path, include
from tision.views import CreateUserView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path("admin/", admin.site.urls),
    path("tision/user/register", CreateUserView.as_view(), name="register"),
    path("tision/token", TokenObtainPairView.as_view(), name="get_token"),
    path("tision/token/refresh", TokenRefreshView.as_view(), name="token_refresh"),
    path("api-auth/", include("rest_framework.urls")),
    path("tision/", include("tision.urls")),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
