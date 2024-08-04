from django.urls import path
from .views import *

urlpatterns=[
    path('blogs/', display_all),
    path('blogs/<int:id>/', display_blog),
    path('member/', display_members),
    path('projects/', display_projects),
    
]