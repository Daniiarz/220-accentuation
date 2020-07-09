from .models import Site
from django.views.generic import DetailView

# Create your views here.


class SiteView(DetailView):
    template_name = "index.html"
    model = Site
