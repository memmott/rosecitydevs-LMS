angular.module('studentApp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		controller:'studentCtrl',
		templateUrl:'views/student.html'
	})

}]);