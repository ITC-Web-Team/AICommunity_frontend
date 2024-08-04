from django.contrib import admin
from .models import *
import markdown
from django.utils.html import format_html



admin.site.register(Blog)
admin.site.register(Member)
admin.site.register(Project)
