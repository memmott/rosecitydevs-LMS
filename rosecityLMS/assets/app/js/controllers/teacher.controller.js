angular.module('LMSApp')

.config(function ($stateProvider) {
  $stateProvider
  .state('teacher', {
    url: '/teacher/',
    templateUrl: 'static/app/partials/teacher-dashboard.html'
  })
  .state('gradebook', {
    url: '/teacher/gradebook',
    templateUrl: 'static/app/partials/teacher-gradebook.html'
  })
})


.controller('TeacherController', function($scope) {


});
