from django.shortcuts import render

def home(request):
    context = {
        'messaggio': 'Benvenuto nella home!'
    }

    return render(request, 'home.html', context)
