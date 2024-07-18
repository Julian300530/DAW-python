from django import template
from pages.models import Page

# Registrar en la libreria template
register = template.library

@register.simple_tag
def get_page_list():
    pages = Page.objects.all()
    return pages