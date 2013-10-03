from django.conf.urls import patterns, include, url
from basic_board import views

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'django_board.views.home', name='home'),
    # url(r'^django_board/', include('django_board.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
    url(r'^$', views.home),
    url(r'^boards/', views.getAllList),
    url(r'^test/', views.test),
)
