angular.module('StudentApp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		controller:'studentCtrl',
		templateUrl:'views/student.html'
	})
	
.controller('MainController', function($scope) {


});
