from django.urls import path
from .views import ProductView, CategoryView

urlpatterns = [
    path('Products/',ProductView.as_view()),
    path('Categories/',CategoryView.as_view())
]