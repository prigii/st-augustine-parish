from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ClergyViewSet

router = DefaultRouter()
router.register(r'clergy', ClergyViewSet)

urlpatterns = [
    path('', include(router.urls)),
    
]
