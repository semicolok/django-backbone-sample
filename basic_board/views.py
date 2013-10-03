# -*- coding: utf-8 -*-
from django.shortcuts import render_to_response
from django.core import serializers

from django.http import HttpResponse

from django.views.decorators.csrf import csrf_exempt

from django.utils import timezone
from django.utils import simplejson

from basic_board.models import Board


def home(req):
	return render_to_response('index.html')

def test(req):
	return render_to_response('test.html')

@csrf_exempt
def getAllList(req):
	if req.method == 'POST':
		pass

	boardList = Board.objects.order_by('-id')
	print req.method
	return HttpResponse(serializers.serialize('json', boardList), content_type="application/json")	