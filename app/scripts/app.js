'use strict';

angular.module('kpopApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'SwitchableGridController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
