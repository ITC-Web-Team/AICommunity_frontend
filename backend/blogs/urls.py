from django.urls import path
from .views import *

urlpatterns=[
    path('blogs/', display_all),
    path('blog/<int:id>/', display_blog),
    path('member/', display_members),
    
]