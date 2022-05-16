from django.http import JsonResponse
from django.views import View
from .models import Category, Product
from django.shortcuts import render

# Create your views here.
class ProductView(View):
    def get(self, request):
        products = list(Product.objects.values())
        {'products': products}
        return JsonResponse(products, safe=False)

class CategoryView(View):
    def get(self, request):
        categories = list(Category.objects.values())
        {'categories': categories}
        return JsonResponse(categories, safe=False)

def Catalogo(request):
    return render (request, 'catalogo.html')
