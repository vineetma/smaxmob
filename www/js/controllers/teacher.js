myApp.controllers.controller('TeacherCtrl', ['$scope', '$rootScope', '$window', '$location', '$http','$routeParams', function ($scope, $rootScope, $window, $location, $http,$routeParams) {
	$scope.id = 0;
	console.log("Email", $routeParams.email);
	$scope.email = $routeParams.email;
	 $scope.$watch('firstName', function(ov, nv){
		 console.log("FirstName updated:", ov, nv);
		 console.log("First: ", $scope.firstName);
	 });
	 $scope.createTeacher = function() {
	//var emp = Employee.readAll({employeeId: 223});
		 console.log("Testing taecher creation..", $scope.firstName, $scope.lastName);
			$.ajax({
			    url:serverURL+'/provision',
			    dataType: 'jsonp',
			    data: {'action':'add',
		 		    'teacher':{
			 			
			 			'firstName':$scope.firstName,
			 			'lastName': $scope.lastName,
			 			'email' : $scope.email,
			 			'teacherId':$scope.teacherId,
			 			'department' : $scope.department,
			 			'password': $scope.password,
			 			'role':$scope.role
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
	$scope.readTeacher = function() {
				console.log("Testing teacher read..", $scope.teacherId);
				$.ajax({url:serverURL+'/provision',
						dataType: 'JSONP',
						data: {
							action: 'read1',
							email : $scope.email
						},
						success: function(data){
							console.log("Read response: ", data);
							if(data.status) {
								$scope.firstName = data.teacher.firstName;
								$scope.lastName = data.teacher.lastName;
								
								$scope.teacherId =data.teacher.teacherId,
								$scope.department= data.teacher.department;
								$scope.password = data.teacher.password;
								$scope.id = data.teacher.id;
							} else {
								alert("No data available");
								
							}
							$scope.$apply(function(){
						 		$scope.status = data.status;
						 		$scope.statusCode = data.status_code;
						 		$scope.statusMessage = data.status_message;
					 		});
						}
						});
			};
			
	$scope.updateTeacher = function() {
		console.log($scope);
				$.ajax({url:serverURL+'/provision',
						dataType: 'JSONP',
		    		    data: {'action':'update1',
				 		    'teacher':{
				 		    	'id' : $scope.id,
					 			'teacherId': $scope.teacherId,
					 			'firstName':$scope.firstName,
					 			'lastName': $scope.lastName,
					 			'email' : $scope.email,	
					 			'department' : $scope.department,
					 			'password': $scope.password
					 		}
		    		    },
						success: function(data){
							if(data.status) {
								$scope.$apply(function(){
							 		$scope.status = data.status;
							 		$scope.statusCode = data.status_code;
							 		$scope.statusMessage = data.status_message;
						 		});
							} else {
								alert("No data available");
								$scope.$apply(function(){
							 		$scope.status = data.status;
							 		$scope.statusCode = data.status_code;
							 		$scope.statusMessage = data.status_message;
						 		});
							}
						}});
			};
			$scope.readTeacher();
	}]);