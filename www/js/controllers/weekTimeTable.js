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
						'$filter',
						function($scope, $window, $http, $routeParams,
								$location, Department, Section, Semester,$filter) {
							$scope.departmentOptions = Department.getOptions();
							$scope.sectionOptions = Section.getOptions();
							$scope.semesterOptions = Semester.getOptions();
							$scope.main.title = "Timetable";
						    $scope.email = $routeParams.email;
						    var parts = $location.path().split('/');
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
													$scope.getTimeTable();
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

							$scope.getTimeTable = function() {
								$
										.ajax({
											url : serverURL + '/timetable',
											dataType : 'jsonp',
											data : {
												'action' : 'getWeek',
												'term' : $scope.semester.value,
												'section' : $scope.section.value,
												'department' : $scope.department.value,
												'date':$filter('date')($scope.dt,'yyyy-MM-dd')

											},
											success : function(data) {
												console.log(data);
												$scope
														.$apply(function() {
															$scope.status = data.status;
															$scope.statusCode = data.status_code;
															$scope.statusMessage = data.status_message;
															if (data.status == true) {
																$scope.timeTable = data.timeSlots.timetable;
																$scope.timeTableObject = data.timeSlots.timetableObject;
																for(var d = 0; d < $scope.timeTable[0].length; d++) {
																		day = $scope.timeTable[0][d][0].day;
																		dt = new Date(data.timeSlots.timetableObject.startDate);
																	//	dt.setDate(dt.getDate()+day-1);
																		$scope.timeTable[0][d].date = dt.toDateString();
																}
															}
															else{
																alert("No data available");
															}
															console.log($scope.timeTable);
														});
											}
										});
							};
							$scope.$watch('userNotes2', function(ov, nv) {
								console.log("User notes changed", ov, nv);
							});
							$scope.formats = ['yyyy-MM-dd', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
						     $scope.format = $scope.formats[0];
						     
						     $scope.today = function() {
						         $scope.dt = new Date();
						     };
						     $scope.today();
						     $scope.disabled = function(date, mode) {
						             return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
						     };
						     $scope.open = function($event) {
						                 $event.preventDefault();
						                 $event.stopPropagation();

						                 $scope.opened = true;
						     };
						     
					
							

							if (parts[1] == "timetable1"  ){
								readStudent();
							$scope.hideSelection = true;							
							}
							else if(parts[1] == "home"){
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
