from django.urls import include, path

from . import views

urlpatterns = [
    path("profile/", views.ProfileView.as_view(), name="profile"),
    path("auth/", include('djoser.urls')),
    path("auth/", include('djoser.urls.jwt')),
]
