myApp.controllers.controller('NewTimetableCtrl', ['$scope', '$rootScope', '$window', '$location', '$http', function ($scope, $rootScope, $window, $location, $http) {
    	
        
        $scope.createTimetable= function() {
   
       	 console.log("Creating Timetable..");
       		$.ajax({
       		    url:serverURL+'/provision',
       		    dataType: 'jsonp',
       		    data: {'action':'createTimetable',
   		 		    'createNewTimetable':{
   			 			
   		 		    'semester' : $scope.semester,	
   		 		'department': $scope.department	,
   		 	'section': $scope.section		
   			 		}
       		    },
       		    success: function(data) {
   			 		console.log(data);
   			 		$scope.$apply(function(){
   				 		$scope.status = data.status;
   				 		$scope.statusCode = data.status_code;
   				 		$scope.statusMessage = data.status_message;
   				 	$scope.timeTableList = data.timeTable;
   				 		
   			 		});
   			 	}
       		});
        };
    }]);