from django.urls import include, path, re_path

from . import views

urlpatterns = [
    path("profile/", views.ProfileView.as_view(), name="profile"),
]
