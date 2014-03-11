myApp.controllers.controller('SignUpCtrl', ['$scope', '$rootScope', '$window', '$location', '$http', function ($scope, $rootScope, $window, $location, $http) {
	
    
    $scope.signin = function() {

   	 console.log("Signing In..");
   		$.ajax({
   		    url:serverURL+'/provision',
   		    dataType: 'jsonp',
   		    data: {'action':'signIn',
		 		    'signIn':{
			 			
		 		    'email' : $scope.email,	
		 		'password': $scope.password	
			 			
			 		}
   		    },
   		    success: function(data) {
			 		console.log(data);
			 		$scope.$apply(function(){
				 		$scope.status = data.status;
				 		$scope.statusCode = data.status_code;
				 		$scope.statusMessage = data.status_message;
				 	
				 		
			 		});
			 	}
   		});
    };
}])
