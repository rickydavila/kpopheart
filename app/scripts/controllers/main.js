'use strict';
function SwitchableGridController($scope, instagram){

	// Default layout of the app. Clicking the buttons in the toolbar
	// changes this value.
	//'use strict';
	$scope.layout = 'grid';

	$scope.pics = [];

	// Use the instagram service and fetch a list of the popular pics
	instagram.fetchPopular(function(data){

		// Assigning the pics array will cause the view
		// to be automatically redrawn by Angular.
		$scope.pics = data;
		console.log('Fetched some data bro');
		var x = Math.floor($scope.pics.length / 3);
		console.log(x);
	});
	$scope.getFirstThird = function() {
		return (Math.floor($scope.pics.length / 3));
	};
	$scope.getSecondThird = function() {
		return (Math.floor($scope.pics.length / 3) * 2);
	};
	$scope.getSizeofArray = function() {
		return (Math.floor($scope.pics.length / 3) * 2);
	};
}
