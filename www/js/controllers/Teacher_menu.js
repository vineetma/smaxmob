    myApp.controllers.controller('Teacher_menuCtrl', ['$scope', '$window', '$http','$routeParams','$location',function ($scope, $window, $http,$routeParams,$location) {
    	console.log("In here..");
    	$scope.email = $routeParams.email;
    	    	$scope.editProfile = function() {
    	    		console.log("Here..to test..");
    	    		$location.path("/edit/"+$scope.email);
    	    		
    	    	};
    	    	$scope.myTimetable = function() {
    	    		console.log("Here..to test..");
    	    		$window.location="TeacherTimeTable.html#/"+$scope.email;
    	    		
    	    	};
    	    	
    }]);