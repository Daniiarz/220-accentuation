from . import views
from django.urls import path


urlpatterns = [
    path("", views.constructor_view, name="constructor"),
    path("checkTitle/", views.check_titles, name="check-titles"),
    path("templates/", views.TemplatesView.as_view(), name="templates")
]
