from django.shortcuts import render
from django.http import HttpResponse

from rest_framework import viewsets
from .models import Clergy
from .serializers import ClergySerializer

class ClergyViewSet(viewsets.ModelViewSet):
    queryset = Clergy.objects.all()
    serializer_class = ClergySerializer


def index(request):
    return HttpResponse("Welcome to St Augustine Catholic Parish, Juja!")
