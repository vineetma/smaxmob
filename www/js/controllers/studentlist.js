myApp.controllers.controller('StudentListCtrl', ['$scope', '$rootScope', '$window', '$location', '$http', function ($scope, $rootScope, $window, $location, $http) {
	$scope.id = 0;
    
    $scope.getstudentlist = function() {

   	 console.log("Testing student list generation..");
   		$.ajax({
   		    url:serverURL+'/provision',
   		    dataType: 'jsonp',
   		    data: {'action':'list',
		 		    'studentList':{
		 		    	'department' : $scope.department,
			 			'semester' : $scope.semester,
			 			'section': $scope.section
   	}
   		    },
   		    success: function(data) {
			 		console.log(data);
			 		$scope.$apply(function(){
				 		$scope.status = data.status;
				 		$scope.statusCode = data.status_code;
				 		$scope.statusMessage = data.status_message;
				 		$scope.studentList = data.studentList;
			 		});
			 	}
   		});
    };
   }]);
