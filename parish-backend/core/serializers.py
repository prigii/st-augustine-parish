from rest_framework import serializers
from .models import Clergy

class ClergySerializer(serializers.ModelSerializer):
    class Meta:
        model = Clergy
        fields = '__all__'
