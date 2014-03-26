    myApp.controllers.controller('Student_menuCtrl', ['$scope', '$window', '$http','$routeParams','$location',function ($scope, $window, $http,$routeParams,$location) {
    	console.log("In here..");
    	$scope.email = $routeParams.email;
    	    	$scope.editProfile = function() {
    	    		console.log("Here..to test..");
    	    		$location.path("/edit/"+$scope.email);
    	    		
    	    	};
    	    	
    	    	$scope.getTimeTable = function() {
    	    		console.log("Here..to test..");
    	    		$window.location="GetTimeTable.html";
    	    		
    	    	};
    	    	
				$scope.listStudents = function() {
					$window.location="StudentList.html#/"+$scope.email;
				}
    	    	
    }]);