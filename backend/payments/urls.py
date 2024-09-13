# payments/urls.py

from django.urls import path
from .views import create_payment, send_email

urlpatterns = [
    path('create-payment/', create_payment, name='create_payment'),
    path('send-email/', send_email, name='send_email'),
]
