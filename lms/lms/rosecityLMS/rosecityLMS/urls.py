from django.conf.urls import include, url
from django.contrib import admin
from django.conf import settings
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
	url(r'^admin/', include(admin.site.urls)),

    # Uncomment the admin/doc line below to enable admin documentation:
    # Examples:
    # url(r'^$', 'rosecityLMS.views.home', name='home'),
    # url(r'^course/', include('course.urls')),
]
