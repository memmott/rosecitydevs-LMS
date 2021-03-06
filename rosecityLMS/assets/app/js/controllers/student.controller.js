angular.module('LMSApp')
    
.controller('StudentController', function($scope, $http) {
  $scope.student = { 
    firstName: 'Brigette',
    lastName: 'Eckert',
    classPoints: 5,
    courses: [{
      period: 1,
      subject: 'Math'
    }, {
      period: 2,
      subject: 'Science'
    }, {
      period: 3,
      subject: 'History'
    }, {
      period: 4,
      subject: 'Language Arts'
    }, {
      period: 5,
      subject: 'Health'
    }, {
      period: 6,
      subject: 'Spanish'
    }]
  };
});
