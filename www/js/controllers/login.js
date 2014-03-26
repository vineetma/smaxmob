    myApp.controllers.controller('loginCtrl', ['$scope', '$window', '$http', function ($scope, $window, $http) {
    	console.log("In here..");
    	    	$scope.login = function() {
       		$.ajax({
       		    url:serverURL+'/login',
       		    dataType: 'jsonp',
       		    data: {'action':'validateUser',
   		 		    	'user_login':$scope.userEmail,
   		 		    	'user_password': $scope.userPassword
   		 		   
       		    },
       		    
       		    success: function(data) {
   			 		console.log(data);
   			 		$scope.$apply(function(){
   				 		$scope.status = data.status;
   				 		$scope.statusCode = data.status_code;
   				 		$scope.statusMessage = data.status_message;
   				 		if($scope.status == true) {
   	   				 		$scope.user_role = data.user_role;
   	   				 		console.log($scope.user_role);
   				 			if($scope.user_role == 1) {
   				 				console.log("Compared...");
   				 				$window.location="admin_menu.html#/admin/";
   				 			}else if($scope.user_role == 2){
   				 				$window.location ="student_menu.html#/navigation/"+$scope.userEmail;
   				 			//	console.log("email",$scope.userEmail);
   				 			}else if($scope.user_role == 3){
   				 			// console.log("email",$scope.userEmail);
   				 				$window.location ="teacher_menu.html#/navigation/"+$scope.userEmail;
   				 			
   				 		}
   				 		}
   			 		});
   			 	}
       		});
    		
    	};
    	$scope.signUp= function(){
    		$window.location ="NewUser.html#/add/";
    	};
    	
    }]);