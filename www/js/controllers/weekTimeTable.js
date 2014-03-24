    myApp.controllers.controller('weekTimeTableCtrl', ['$scope', '$window', '$http','$routeParams','$location',
                                                       function ($scope, $window, $http,$routeParams,$location) {
    	/*console.log("In here..", $routeParams.deptt, $routeParams.section, $routeParams.term);
    	$scope.deptt = $routeParams.deptt;
    	$scope.section = $routeParams.section;
    	$scope.term = $routeParams.term;*/
    	
    	 $scope.timeTable = function(){
		$.ajax({
		    url:serverURL+'/timetable',
		    dataType: 'jsonp',
		    data: {'action':'getWeek',
		    	'term': $scope.semester,
		    	'section': $scope.section,
		    	'department' : $scope.department
		 		
		    },
		    success: function(data) {
		 		console.log(data);
		 		$scope.$apply(function(){
			 		$scope.status = data.status;
			 		$scope.statusCode = data.status_code;
			 		$scope.statusMessage = data.status_message;
			 		if(data.status == true)
			 			$scope.timeTable = data.timeSlots.timetable;
			 		console.log($scope.timeTable);
		 		});
		 	}
		});
    	 };
    }]);