'use strict';

/* App Module */

var BaselineApp = angular.module('BaselineApp', [
  'ngRoute'
]);

BaselineApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html'
      }).
      when('/select', {
        templateUrl: 'partials/select.html'
      }).
      when('/button', {
        templateUrl: 'partials/button.html'
      }).
      when('/function', {
        templateUrl: 'partials/function.html'
      }).
      when('/animation', {
        templateUrl: 'partials/animation.html'
      }).
      otherwise({
        redirectTo: '/'
      });
  }
]);