from django.shortcuts import render

from rest_framework import viewsets
from .models import Clergy
from core.serializers import ClergySerializer

class ClergyViewSet(viewsets.ModelViewSet):
    queryset = Clergy.objects.all()
    serializer_class = ClergySerializer
