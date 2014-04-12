myApp.controllers.controller('TeacherTimetableCtrl', [ '$scope', '$window',
		'$http', '$routeParams', '$location',
		function($scope, $window, $http, $routeParams, $location) {

			/*
			 * console.log("In here..", $routeParams.deptt,
			 * $routeParams.section, $routeParams.term); $scope.deptt =
			 * $routeParams.deptt; $scope.section = $routeParams.section;
			 * $scope.term = $routeParams.term;
			 */

			partsOfLocation = $location.path().split("/");
			if (partsOfLocation.length > 1 && partsOfLocation[1] != '') {
				$scope.hideSelection = true;
				$scope.email = partsOfLocation[1];
			}

			
						
			$scope.timeTable = function() {
				$.ajax({
					url : serverURL + '/timetable',
					dataType : 'jsonp',
					data : {
						'action' : 'myTimetable',
						'week' : $scope.week,
						'userId':$scope.email
					},
					success : function(data) {
						console.log(data);
						$scope.$apply(function() {
							$scope.status = data.status;
							$scope.statusCode = data.status_code;
							$scope.statusMessage = data.status_message;
							if (data.status == true)
								$scope.timeTable = data.timeSlots.timetable;
							console.log($scope.timeTable);
						});
					}
				});
			};
			$scope.$watch('userNotes2', function(ov, nv) {
				console.log("User notes changed", ov, nv);
			});

		/*	console.log("EMail: ", $scope.email, typeof $scope.email);
			if(typeof $scope.email != 'undefined')
		    readStudent(); */

		} ]);
myApp.controllers.controller('ttRowCtrl', [ '$scope', '$window',
                                            		'$http', '$routeParams', '$location',
                                            		function($scope, $window, $http, $routeParams, $location) {
}]);

myApp.controllers.controller('ttCellCtrl', [ '$scope', '$window',
                                    		'$http', '$routeParams', '$location',
                                    		function($scope, $window, $http, $routeParams, $location) {
	$scope.saveNotes = function(period) {
		console.log("Notes: ", $scope.userNotes, $scope.day[period].id);
		$.ajax({
			url : serverURL + '/note',
			dataType : 'jsonp',
			data : {
				'action' : 'saveNotes',
				'userId' : $scope.email,
				'periodId': $scope.day[period].id,
				'userNotes' : $scope.userNotes
			},
			success : function(data) {
				console.log(data);
				
				
				$scope.$apply(function() {
					$scope.showTextBox=false;
				});
			}
		});

	};
	$scope.readNotes = function(period) {
		console.log("Notes: ", $scope.userNotes, $scope.day[period].id);
		$.ajax({
			url : serverURL + '/note',
			dataType : 'jsonp',
			data : {
				'action' : 'readNotes',
				'userId' : $scope.email,
				'periodId': $scope.day[period].id
				
			},
			success : function(data) {
				console.log(data);
				$scope.showNotes = true;
				 
				$scope.$apply(function() {
					$scope.notes = data.notes;
					$scope.status = data.status;
				 		$scope.statusCode = data.status_code;
				 		$scope.statusMessage = data.status_message;
				 		
				 			
				 			
				 		
				});
			}
		});

	};

}]);
