angular.module('StudentApp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        controller:'StudentCtrl',
        templateUrl:'views/student.html'
    })
}])
    
.controller('StudentCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('mock/student.json').success(function(data){
        $scope.students = data;
        $scope.courses = data.courses;
        console.log($scope.courses)
        console.log(data);
    }).error(function(err){
        console.log(err);
    });

}]);
