 myApp.controllers.controller('newUser_Ctrl', ['$scope', '$window', '$http','$routeParams','$location',function ($scope, $window, $http,$routeParams,$location) {
    	console.log("In here..");
    	
    	    	$scope.studentForm = function() {
    	    		console.log("Here..to test..");
    	    		$location.path("/add1/");
    	    		
    	    	};
    	    	
    	    	$scope.teacherForm = function() {
    	    		console.log("Here..to test..");
    	    		$location.path("/add2/");
    	    		
    	    	};
    	    	
    }]);