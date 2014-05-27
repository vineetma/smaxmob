myApp
		.controller(
				'studentlistCtrl',
				[
						'$scope',
						'$rootScope',
						'$window',
						'$location',
						'$http',
						'Department',
						'Section',
						'Semester',
						function($scope, $rootScope, $window, $location, $http,
								Department, Section, Semester) {

							$scope.main.title = "List of students";
							$scope.departmentOptions = Department.getOptions();
							$scope.sectionOptions = Section.getOptions();
							$scope.semesterOptions = Semester.getOptions();
							$scope.id = 0;
							/*
							 * want to hide the form for selection of students
							 * from various classes
							 */
							$scope.hideSelection = false;
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
													$scope.lastName = data.student.lastName;
													$scope.rollNo = data.student.rollNo;
													$scope.section = $scope.sectionOptions[Section
															.getIndexByvalue(data.student.section)];
													$scope.semester = $scope.semesterOptions[Semester
															.getIndexByvalue(data.student.semester)];
													$scope.department = $scope.departmentOptions[Department
															.getIndexByvalue(data.student.department)];
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
													$scope.getstudentlist();
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

							$scope.getstudentlist = function() {

								console
										.log("Testing student list generation..");
								$
										.ajax({
											url : serverURL + '/provision',
											dataType : 'jsonp',
											data : {
												'action' : 'list',
												'studentList' : {
													'department' : $scope.department.value,
													'semester' : $scope.semester.value,
													'section' : $scope.section.value
												}
											},
											success : function(data) {
												console.log(data);
												$scope
														.$apply(function() {
															$scope.status = data.status;
															$scope.statusCode = data.status_code;
															$scope.statusMessage = data.status_message;
															$scope.studentList = data.studentList;
														});
											}
										});
							};
							/* finally in this controller, lets invoke readStudent based on the email provided from path 
							console.log("EMail: ", $scope.email,
									typeof $scope.email);
							if (typeof $scope.email != 'undefined')
								readStudent();*/
							if ($location.path().split("/")[1] == "list1"){
								readStudent();
							$scope.hideSelection = true;}
						} ]);
