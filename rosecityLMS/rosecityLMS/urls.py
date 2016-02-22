from django.conf.urls import include, url
from django.contrib import admin
from django.conf import settings
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
	url(r'^admin/', include(admin.site.urls)),

    # temporary routing by view type
    url(r'^student/', 'rosecityLMS.views.student_view', name='student'),
    url(r'^teacher/', 'rosecityLMS.views.teacher_view', name='teacher'),
    url(r'^parent/', 'rosecityLMS.views.parent_view', name='parent'),
    url(r'^quiz/', 'rosecityLMS.views.quiz_view', name='quiz'),
    url(r'^$', 'rosecityLMS.views.home', name='home'),
    # Uncomment the admin/doc line below to enable admin documentation:
    # Examples:
    # url(r'^course/', include('course.urls')),
]
