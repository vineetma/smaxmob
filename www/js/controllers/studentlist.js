myApp.controllers.controller('StudentListCtrl', ['$scope', '$rootScope', '$window', '$location', '$http', function ($scope, $rootScope, $window, $location, $http) {
	$scope.id = 0;
	/* want to hide the form for selection of students from various classes */
    $scope.hideSelection = false;
    /* also get the email from the url */
    console.log($location.path().split("/"));
    partsOfLocation = $location.path().split("/");
    if(partsOfLocation.length > 1 && partsOfLocation[1] != '') {
    	$scope.hideSelection = true;
    	$scope.email = partsOfLocation[1];
    }

/* reused readStudent from the profile function of the student form */
    var readStudent = function() {
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
   							$scope.section = data.student.section;
   							$scope.semester = data.student.semester;
   							console.log($scope.semester);
   							$scope.department= data.student.department;
   							console.log($scope.department);
   							$scope.password = data.student.password;
   							$scope.id = data.student.id;
   							/* this is the only change from student profile controller
   							 here we are getting the list of students based on the department
   							 section and semester information retrieved from user profile*/
   							$scope.getstudentlist();
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
    /* finally in this controller, lets invoke readStudent based on the email provided from path */
	console.log("EMail: ", $scope.email, typeof $scope.email);
	if(typeof $scope.email != 'undefined')
    readStudent();
   }]);
