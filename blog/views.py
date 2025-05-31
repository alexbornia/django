from django.shortcuts import render

def home(request):
    context = {
        'messaggio': 'Benvenuto nella home!'
    }

    return render(request, 'indice.html', context)
def film(request):
    return render(request, 'film.html')
def musica(request):
    return render(request, 'musica.html')
def indice(request):
    return render(request, 'indice.html')