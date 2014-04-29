myApp
		.controller(
				'weekTimeTableCtrl',
				[
						'$scope',
						'$window',
						'$http',
						'$routeParams',
						'$location',
						'Department',
						'Section',
						'Semester',
						function($scope, $window, $http, $routeParams,
								$location, Department, Section, Semester) {
							$scope.departmentOptions = Department.getOptions();
							$scope.sectionOptions = Section.getOptions();
							$scope.semesterOptions = Semester.getOptions();
						
						    $scope.email = $routeParams.email;
						    
							var readStudent = function() {
								$
										.ajax({
											url : serverURL + '/provision',
											dataType : 'JSONP',
											data : {
												action : 'read',
												email : $scope.email
											},
											success : function(data) {
												console.log("Read response: ",
														data);
												if (data.status) {
													$scope.firstName = data.student.firstName;
													console
															.log($scope.firstName);
													$scope.lastName = data.student.lastName;
													$scope.rollNo = data.student.rollNo;
													$scope.section = $scope.sectionOptions[Section
															.getIndexByvalue(data.student.section)];
													
													$scope.department = $scope.departmentOptions[Department
															.getIndexByvalue(data.student.department)];
													
													$scope.semester = $scope.semesterOptions[Semester
															.getIndexByvalue(data.student.semester)];
													
													$scope.password = data.student.password;
													$scope.id = data.student.id;
													/*
													 * this is the only change
													 * from student profile
													 * controller here we are
													 * getting the list of
													 * students based on the
													 * department section and
													 * semester information
													 * retrieved from user
													 * profile
													 */
													$scope.timeTable();
												} else {
													alert("No data available");

												}
												$scope
														.$apply(function() {
															$scope.status = data.status;
															$scope.statusCode = data.status_code;
															$scope.statusMessage = data.status_message;
														});
											}
										});
							};

							$scope.timeTable = function() {
								$
										.ajax({
											url : serverURL + '/timetable',
											dataType : 'jsonp',
											data : {
												'action' : 'getWeek',
												'term' : $scope.semester.value,
												'section' : $scope.section.value,
												'department' : $scope.department.value

											},
											success : function(data) {
												console.log(data);
												$scope
														.$apply(function() {
															$scope.status = data.status;
															$scope.statusCode = data.status_code;
															$scope.statusMessage = data.status_message;
															if (data.status == true)
																$scope.timeTable = data.timeSlots.timetable;
															console
																	.log($scope.timeTable);
														});
											}
										});
							};
							$scope.$watch('userNotes2', function(ov, nv) {
								console.log("User notes changed", ov, nv);
							});

							if ($location.path().split("/")[1] == "timetable1" ||"home" ){
								readStudent();
							$scope.hideSelection = true;
							
							}

						} ]);
myApp.controller('ttRowCtrl', [ '$scope', '$window', '$http', '$routeParams',
		'$location', function($scope, $window, $http, $routeParams, $location) {
	
		} ]);

myApp.controller('ttCellCtrl',
		[
				'$scope',
				'$window',
				'$http',
				'$routeParams',
				'$location',
				function($scope, $window, $http, $routeParams, $location) {
					$scope.saveNotes = function(period) {
						console.log("Notes: ", $scope.userNotes,
								$scope.day[period].id);
						$.ajax({
							url : serverURL + '/note',
							dataType : 'jsonp',
							data : {
								'action' : 'saveNotes',
								'userId' : $scope.email,
								'periodId' : $scope.day[period].id,
								'userNotes' : $scope.userNotes
							},
							success : function(data) {
								console.log(data);

								$scope.$apply(function() {
									$scope.showTextBox = false;
									
								});
							}
						});

					};
					$scope.readNotes = function(period) {
						console.log("Notes: ", $scope.userNotes,
								$scope.day[period].id);
						$.ajax({
							url : serverURL + '/note',
							dataType : 'jsonp',
							data : {
								'action' : 'readNotes',
								'userId' : $scope.email,
								'periodId' : $scope.day[period].id

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
					


				} ]);
