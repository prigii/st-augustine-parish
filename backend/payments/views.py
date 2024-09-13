from django.shortcuts import render

# payments/views.py

import stripe
from django.conf import settings
from django.http import JsonResponse
from django.core.mail import send_mail
from rest_framework.decorators import api_view
from rest_framework.response import Response

stripe.api_key = settings.STRIPE_SECRET_KEY

@api_view(['POST'])
def create_payment(request):
    try:
        data = request.data
        intent = stripe.PaymentIntent.create(
            amount=data['amount'],
            currency='usd',
            payment_method=data['payment_method_id'],
            confirmation_method='manual',
            confirm=True,
        )
        return JsonResponse({'client_secret': intent['client_secret']})
    except stripe.error.CardError as e:
        return JsonResponse({'error': str(e)}, status=400)

@api_view(['POST'])
def send_email(request):
    try:
        data = request.data
        send_mail(
            'Donation Received',
            'Thank you for your donation!',
            'your-email@example.com',
            ['info@staugustinejuja.org'],
            fail_silently=False,
        )
        return Response({'message': 'Email sent successfully!'})
    except Exception as e:
        return Response({'error': str(e)}, status=400)

