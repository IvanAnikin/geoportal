from django.shortcuts import render


def index(request):
    return render(request, 'index.html')



def nocode(request):
    return render(request, 'gojs_flowchart.html')

def jointjs(request):
    return render(request, 'jointjs.html')

def login(request):
    return render(request, 'login.html')
