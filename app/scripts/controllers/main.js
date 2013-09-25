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
	});
}
