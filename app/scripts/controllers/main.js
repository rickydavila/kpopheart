'use strict';
function SwitchableGridController($scope, instagram){

	// Default layout of the app. Clicking the buttons in the toolbar
	// changes this value.
	//'use strict';
	$scope.layout = 'grid';

	var pics = [];

	// Use the instagram service and fetch a list of the popular pics
	instagram.fetchPopular(function(data){

		// Assigning the pics array will cause the view
		// to be automatically redrawn by Angular.
		pics = data;
		console.log('Fetched some data bro');
	});
  	var items = [];
  	var index = 0;
 	var x = Math.ceil(pics.length / 3);
	for (var i = 0; i < x; i++) {
	   var index = i * 3;
	   var obj = {
	       i1: pics[index];
	   }
	   if (pics[index + 1]) {
	        obj.i2 = pics[index + 1];
	   }
	   if (pics[index + 2]) {
	        obj.i3 = pics[index + 2];
	   }
	   items.push(obj);
	};
	console.log(items); 
	$scope.items = items;
};
