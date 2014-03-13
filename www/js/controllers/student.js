myApp.controllers.controller('StudentCtrl', ['$scope', '$rootScope', '$window', '$location', '$http', '$routeParams', function ($scope, $rootScope, $window, $location, $http, $routeParams) {
	$scope.id = 0;
	console.log("Email", $routeParams.email);
	$scope.email = $routeParams.email;
    $scope.$watch('firstName', function(ov, nv){
   	 console.log("FirstName updated:", ov, nv);
   	 console.log("First: ", $scope.firstName);
    });
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
			 			'section': $scope.section,
			 			'semester' : $scope.semester,
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
   							$scope.lastName = data.student.lastName;
   							$scope.rollNo = data.student.rollNo;
   							$scope.section = data.student.section;
   							$scope.semester = data.student.semester;
   							$scope.department= data.student.department;
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
   				 			'section': $scope.section,
   				 			'semester' : $scope.semester,
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
   		$scope.readStudent();

   		
   }]);