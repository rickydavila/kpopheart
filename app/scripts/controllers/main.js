'use strict';
function SwitchableGridController($scope, instagram){

	// Default layout of the app. Clicking the buttons in the toolbar
	// changes this value.
	//'use strict';
	$scope.layout = 'grid';
	$scope.items = [];
	$scope.pics = [];

	// Use the instagram service and fetch a list of the popular pics
	instagram.fetchPopular(function(data){

		// Assigning the pics array will cause the view
		// to be automatically redrawn by Angular.
		$scope.pics = data;
		var objects = [];
	  	var index = 0;
	 	var x = Math.ceil(($scope.pics).length / 3);
	 	console.log('this is x: ' + x);
		for (var i = 0; i < x; i++) {
		   index = i * 3;
		   var obj = {i1: ($scope.pics)[index]};
		   console.log(obj);
		   if (($scope.pics)[index + 1]) {obj.i2 = ($scope.pics)[index + 1];}
		   if (($scope.pics)[index + 2]) {obj.i3 = ($scope.pics)[index + 2];}
		   objects.push(obj);
		};
		$scope.items = objects;
	});
  	
	/*console.log($scope.items); */
}
