'use strict';

var app = angular.module('kpopApp', ['ngResource', 'ngAnimate']);
/*app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'SwitchableGridController'
    })
    .otherwise({
      redirectTo: '/'
    });
});*/

// Create and register the new "instagram" service
app.factory('instagram', function($resource){

  return {
    fetchPopular: function(callback){

      // The ngResource module gives us the $resource service. It makes working with
      // AJAX easy. Here I am using the client_id of a test app. Replace it with yours.

      var api = $resource('https://api.instagram.com/v1/tags/kpop/media/recent?client_id=:client_id&callback=JSON_CALLBACK',{
        client_id: '642176ece1e7445e99244cec26f4de1f'
      },{
        // This creates an action which we've chosen to name "fetch". It issues
        // an JSONP request to the URL of the resource. JSONP requires that the
        // callback=JSON_CALLBACK part is added to the URL.

        fetch:{method:'JSONP'}
      });

      api.fetch(function(response){

        // Call the supplied callback function
        callback(response.data);

      });
    }
  };
});

app.controller('SwitchableGridController', ['$scope', 'instagram', function($scope, instagram) {
// Default layout of the app. Clicking the buttons in the toolbar
// changes this value.
    //'use strict';
    $scope.layout = 'grid';
    $scope.items = [];
    $scope.pics = [];

// Use the instagram service and fetch a list of the popular pics
    instagram.fetchPopular(function (data) {

// Assigning the pics array will cause the view
// to be automatically redrawn by Angular.
        $scope.pics = data;
        var objects = [], index = 0, x = Math.ceil(($scope.pics).length / 3);
        //console.log('this is x: ' + x);
        for (var i = 0; i < x; i++) {
          index = i * 3;
          var obj = {i1: ($scope.pics)[index]};
          if (($scope.pics)[index + 1]) {obj.i2 = ($scope.pics)[index + 1];}
          if (($scope.pics)[index + 2]) {obj.i3 = ($scope.pics)[index + 2];}
          objects.push(obj);
        }
        $scope.items = objects;
      });
/*console.log($scope.items); */
  }]);
