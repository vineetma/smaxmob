'use strict';
var serverURL = "http://192.168.2.102:8080/StudentTimetable";
angular.module('myApp.controllers', [])
    .controller('StudentCtrl', ['$scope', '$rootScope', '$window', '$location', '$http', function ($scope, $rootScope, $window, $location, $http) {
    	$scope.id = 0;
     $scope.$watch('firstName', function(ov, nv){
    	 console.log("FirstName updated:", ov, nv);
    	 console.log("First: ", $scope.firstName);
     });
     $scope.createStudent = function() {
// var emp = Employee.readAll({employeeId: 223});
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
			 			'password': $scope.password
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
    		/*
			 * Employee.readAll();
			 * $http.post('http://localhost:8080/StudentTimetable/provision',
			 * {'action':'add', 'student':{ 'rollNo': $scope.rollNo,
			 * 'firstName':$scope.firstName, 'lastName': $scope.lastName,
			 * 'email' : $scope.email, 'section': $scope.section, 'semester' :
			 * $scope.semester, 'department' : $scope.department, 'password':
			 * $scope.password } } ).success(function(data){ console.log("Return
			 * value from ajax call: ", data); });
			 */
    }])
    //    Teacher Controller

    .controller('TeacherCtrl', ['$scope', '$rootScope', '$window', '$location', '$http', function ($scope, $rootScope, $window, $location, $http) {
	$scope.id = 0;
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
		 			'password': $scope.password
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
		// Student list Controller
}])

    .controller('StudentListCtrl', ['$scope', '$rootScope', '$window', '$location', '$http', function ($scope, $rootScope, $window, $location, $http) {
    	$scope.id = 0;
     
     $scope.getstudentlist = function() {

    	 console.log("Testing student list generation..");
    		$.ajax({
    		    url:serverURL+'/provision',
    		    dataType: 'jsonp',
    		    data: {'action':'list',
		 		    'studentList':{
		 		    	'department' : $scope.department,
			 			'semester' : $scope.semester,
			 			'section': $scope.section
    	}
    		    },
    		    success: function(data) {
			 		console.log(data);
			 		$scope.$apply(function(){
				 		$scope.status = data.status;
				 		$scope.statusCode = data.status_code;
				 		$scope.statusMessage = data.status_message;
				 		$scope.studentList = data.studentList;
			 		});
			 	}
    		});
     };
    }])
    .controller('SignUpCtrl', ['$scope', '$rootScope', '$window', '$location', '$http', function ($scope, $rootScope, $window, $location, $http) {
    	
        
        $scope.signin = function() {
   
       	 console.log("Signing In..");
       		$.ajax({
       		    url:serverURL+'/provision',
       		    dataType: 'jsonp',
       		    data: {'action':'signIn',
   		 		    'signIn':{
   			 			
   		 		    'email' : $scope.email,	
   		 		'password': $scope.password	
   			 			
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
    }])
    .controller('NewTimetableCtrl', ['$scope', '$rootScope', '$window', '$location', '$http', function ($scope, $rootScope, $window, $location, $http) {
    	
        
        $scope.createTimetable= function() {
   
       	 console.log("Creating Timetable..");
       		$.ajax({
       		    url:serverURL+'/provision',
       		    dataType: 'jsonp',
       		    data: {'action':'createTimetable',
   		 		    'createNewTimetable':{
   			 			
   		 		    'semester' : $scope.semester,	
   		 		'department': $scope.department	,
   		 	'section': $scope.section		
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
    }])
    .controller('loginCtrl', ['$scope', '$window', '$http', function ($scope, $window, $http) {
    	console.log("In here..");
    	$scope.login = function() {
       		$.ajax({
       		    url:serverURL+'/provision',
       		    dataType: 'jsonp',
       		    data: {'action':'login',
   		 		    'user':{
   		 		    	'user_login':$scope.userLogin,
   		 		    	'user_password': $scope.userPassword
   			 		}
       		    },
       		    success: function(data) {
   			 		console.log(data);
   			 		$scope.$apply(function(){
   				 		$scope.status = data.status;
   				 		if($scope.status == true) {
   				 			if($scope.user_role == 1) {
   				 				$window.path="admin_menu.html";
   				 			}
   				 		}
   				 		$scope.statusCode = data.status_code;
   				 		$scope.statusMessage = data.status_message;
   			 		});
   			 	}
       		});
    		
    	};
    	
    	
    }]);
    
    
