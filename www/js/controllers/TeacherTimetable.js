

myApp.controllers.controller('TeacherTimetableCtrl', [ '$scope', '$window','Department',
		'$http', '$routeParams', '$location','Section',
		function($scope, $window, Department, $http, $routeParams, $location,Section) {

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

			
						
			$scope.teachertimeTable = function() {
				$.ajax({
					url : serverURL + '/timetable',
					dataType : 'jsonp',
					data : {
						'action' : 'myTimetable',
						'week' : $scope.week,
						'userId':$scope.email
					},
					success : function(data) {
						console.log(data, data.teacherTimetable);
						$scope.$apply(function() {
							$scope.status = data.status;
							$scope.statusCode = data.status_code;
							$scope.statusMessage = data.status_message;
							
							if (data.status == true){
								$scope.timeTables = data.teacherTimetable.timeTables;
								$scope.modTimeTable = [];
								for(var i = 0; i < $scope.timeTables.length; i++){
									var days = $scope.timeTables[i].timetable[0];
									var to = $scope.timeTables[i].timetableObject;
									//var department = to.department;
									var department = Department.getOptions()[Department.getIndexByvalue(to.department)] ;
									//var section = to.section;
									var section = Section.getOptions()[Section.getIndexByvalue(to.section)];
									
									var semester = to.semester;
									for(var j=0; j < days.length; j++) {
										var periods = days[j];
										for (var k=0; k < periods.length; k++) {
											var day = periods[k].day;
											var number = periods[k].number;
											var subjectTeacher = periods[k].subjectTeacher;
											var room = periods[k].room;
											var week = periods[k].week;
											var tsId = periods[k].id;
											console.log("Data", day, number, subjectTeacher, room, week, tsId);
											if(typeof $scope.modTimeTable[day-1] == 'undefined') {
												$scope.modTimeTable[day-1] = [];
											} 
											$scope.modTimeTable[day-1].push({'tsId': tsId, 'room': room, 'week': week, 
													'day':day, 'number': number, 'subjectTeacher':subjectTeacher, 
													'department':department, 'section':section, 
													'semester': semester});										
										}
									}
								}
								console.log("Modified timetable", $scope.modTimeTable);
								console.log("status is true", $scope.timeTables);
							}
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
                                    		'$http', '$routeParams', '$location','Department',
                                    		function($scope, $window, $http, $routeParams, $location,Department) {
	partsOfLocation = $location.path().split("/");
	if (partsOfLocation.length > 1 && partsOfLocation[1] != '') {
		$scope.hideSelection = true;
		$scope.email = partsOfLocation[1];
	}


	$scope.saveNotes = function() {
		console.log("Notes: ", $scope.userNotes, $scope.period.tsId);
		$.ajax({
			url : serverURL + '/note',
			dataType : 'jsonp',
			data : {
				'action' : 'saveNotes',
				'userId' : $scope.email,
				'periodId': $scope.period.tsId,
				'userNotes' : $scope.userNotes
			},
			success : function(data) {
				console.log(data);
				
				
				$scope.$apply(function() {
					$scope.showTextBox=false;
					$scope.readNotes();
				});
			}
		});

	};
	$scope.readNotes = function() {
		console.log("Notes: ", $scope.userNotes, $scope.period.tsId);
		$.ajax({
			url : serverURL + '/note',
			dataType : 'jsonp',
			data : {
				'action' : 'readNotes',
				'userId' : $scope.email,
				'periodId': $scope.period.tsId
				
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
