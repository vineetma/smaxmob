myApp
		.controller(
				'TeacherTimetableCtrl',
				[
						'$scope',
						'$window',
						'Department',
						'$http',
						'$routeParams',
						'$location',
						'Section',
						'$filter',
						function($scope, $window, Department, $http,
								$routeParams, $location, Section,$filter) {
							$scope.main.title = "Timetable";
						
							 $scope.email = $routeParams.email;
							 var parts = $location.path().split('/');
							$scope.teachertimeTable = function() {
								$
								 .ajax({
								  url : serverURL + '/timetable',
								  dataType : 'jsonp',
								  data : {
								  'action' : 'myTimetable',
								  'week' : $scope.week,
								  'userId' : $scope.email,
								  'date':$filter('date')($scope.dt,'yyyy-MM-dd')
								   },
								   success : function(data) {
								   console.log(data,
								   data.teacherTimetable);
								   $scope
										 .$apply(function() {
										  $scope.status = data.status;
										  $scope.statusCode = data.status_code;
										  $scope.statusMessage = data.status_message;
										  if (data.status == true) {
											  $scope.timeTables = data.teacherTimetable.timeTables;
											  $scope.modTimeTable = [];
											  for ( var i = 0; i < $scope.timeTables.length; i++) {
												    var days = $scope.timeTables[i].timetable[0];
													var to = $scope.timeTables[i].timetableObject;
													var department = Department
																	 .getOptions()[Department
																	 .getIndexByvalue(to.department)];

													var section = Section
										   						  .getOptions()[Section
																  .getIndexByvalue(to.section)];
													var semester = to.semester;
							     			  for ( var j = 0; j < days.length; j++) {
													var periods = days[j];
											  for ( var k = 0; k < periods.length; k++) {
													var day = periods[k].day;
													var number = periods[k].number;
													var subjectTeacher = periods[k].subjectTeacher;
													var room = periods[k].room;
													var week = periods[k].week;
													var tsId = periods[k].id;
												    dt = new Date(to.startDate);
												   $scope.date= dt.toDateString();	
												   
													console.log(
																"Data",
																day,
																number,
																subjectTeacher,
																room,
																$scope.date,
																week,																		
																tsId);
											  if (typeof $scope.modTimeTable[day ] == 'undefined') {
														 $scope.modTimeTable[day] = [];
																			}
														 $scope.modTimeTable[day ].push({
															'tsId' : tsId,
															'room' : room,
															'week' : week,
															'day' : day,
					     									'number' : number,
					     									'date' :$scope.date,
															'subjectTeacher' : subjectTeacher,
															'department' : department,
															'section' : section,
															'semester' : semester
																		});
																}
															}
														}
											console.log(
												       "Modified timetable",
														$scope.modTimeTable);
											console.log(
														"status is true",
														$scope.timeTables);
													}
												});
									}
								});
					}; 
					
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
				     
				     $scope.$watch('dt',function(nv,ov){
					  	  console.log('Date:',$scope.dt); 
					     });
					
							$scope.$watch('userNotes2', function(ov, nv) {
								console.log("User notes changed", ov, nv);
							});

							if (parts[1] == "timetable"  ){
								console.log('parts',$location.path());
								$scope.teachertimeTable();
														
							}else if(parts[1] == "home"  ){
								console.log('parts',$scope.email);
								$scope.teachertimeTable();
														
							}
							
						} ]);
myApp.controller('ttRowCtrl', [ '$scope', '$window', '$http', '$routeParams',
		'$location', function($scope, $window, $http, $routeParams, $location) {
		} ]);


myApp.controller('ttCellCtrl1', [ '$scope', '$window', '$http', '$routeParams',
		'$location', 'Department',
		function($scope, $window, $http, $routeParams, $location, Department) {
		

			$scope.saveNotes = function() {
				console.log("Notes: ", $scope.userNotes, $scope.period.tsId);
				$.ajax({
					url : serverURL + '/note',
					dataType : 'jsonp',
					data : {
						'action' : 'saveNotes',
						'userId' : $scope.email,
						'periodId' : $scope.period.tsId,
						'userNotes' : $scope.userNotes
					},
					success : function(data) {
						console.log(data);

						$scope.$apply(function() {
							$scope.showTextBox = false;
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
						'periodId' : $scope.period.tsId

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
