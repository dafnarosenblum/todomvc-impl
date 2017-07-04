'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.view'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view'});
}]);
