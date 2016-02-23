angular.module('LMSApp', ['ngSanitize', 'ui.router'])

.config(function($urlRouterProvider, $locationProvider) {
  $urlRouterProvider
    .otherwise('/');

  $locationProvider.html5Mode(true);
});
