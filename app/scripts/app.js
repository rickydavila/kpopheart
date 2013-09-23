'use strict';

var app = angular.module('kpopApp', ['ngResource']);
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
