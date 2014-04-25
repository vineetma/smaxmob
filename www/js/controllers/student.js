myApp.controllers.controller
    ('StudentCtrl', ['$scope', '$rootScope', '$window', '$location', '$http', '$routeParams', 'Department',
                     'Section','Semester', function 
                     ($scope, $rootScope, $window, $location, $http, $routeParams,Department,Section,Semester) {
	$scope.id = 0;
	console.log("Email", $routeParams.email);
	$scope.email = $routeParams.email;
	
	$scope.departmentOptions=Department.getOptions();
	$scope.sectionOptions=Section.getOptions();
	$scope.semesterOptions=Semester.getOptions();
   
    $scope.createStudent = function() {
//var emp = Employee.readAll({employeeId: 223});
   	 console.log("Testing student creation..", $scope.firstName, $scope.lastName);
   		$.ajax({
   		    url:serverURL+'/provision',
   		    dataType: 'jsonp',
   		    data: {'action':'add',
		 		    'student':{
			 			'rollNo': $scope.rollNo,
			 			'firstName':$scope.firstName,
			 			'lastName': $scope.lastName,
			 			'email' : $scope.email,
			 			'section': $scope.section.value,
			 			'semester' : $scope.semester.value,
			 			'department' : $scope.department.value,
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
   $scope.readStudent = function() {
   			console.log("Testing student read..", $scope.rollNo);
   			$.ajax({url:serverURL+'/provision',
   					dataType: 'JSONP',
   					data: {
   						action: 'read',
   						email : $scope.email
   					},
   					success: function(data){
   						console.log("Read response: ", data);
   						if(data.status) {
   							$scope.firstName = data.student.firstName;
   							console.log($scope.firstName);
   							$scope.lastName = data.student.lastName;
   							$scope.rollNo = data.student.rollNo;
   						//	$scope.section = data.student.section;
   							$scope.section = 	$scope.sectionOptions[Section.getIndexByvalue(data.student.section)];
   							$scope.semesterOptions[Semester.getIndexByvalue(data.student.semester)];
   						//	$scope.semester = data.student.semester;
   							console.log($scope.semester, data.student.department);
   							$scope.department = $scope.departmentOptions[Department.getIndexByvalue(data.student.department)];
   							console.log($scope.department);
   							$scope.password = data.student.password;
   							$scope.id = data.student.id;
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
   		
   $scope.updateStudent = function() {
   	console.log($scope);
   			$.ajax({url:serverURL+'/provision',
   					dataType: 'JSONP',
   	    		    data: {'action':'update',
   			 		    'student':{
   			 		    	'id' : $scope.id,
   				 			'rollNo': $scope.rollNo,
   				 			'firstName':$scope.firstName,
   				 			'lastName': $scope.lastName,
   				 			'email' : $scope.email,
   				 			'section': $scope.section.value,
   				 			'semester' : $scope.semester.value,
   				 			'department' : $scope.department.value,
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
   		

   	if($location.path().split("/")[1] == "edit")
   	$scope.readStudent();

   	$scope.back = function() {
   		$location.path("navigation/"+$scope.email );
   	};
   		
   }]);
