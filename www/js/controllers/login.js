myApp
		.controller(
				'loginCtrl',
				[
						'$scope',
						'$window',
						'$http',
						function($scope, $window, $http) {
							console.log("In here..");
							$scope.main.menuItems = [ {
								'url' : '/',
								'class':'glyphicon glyphicon-home',
								'text' : 'Home'
								
							} ];
							$scope.main.title = "Login";
							$scope.login = function() {
								$
										.ajax({
											url : serverURL + '/login',
											dataType : 'jsonp',
											data : {
												'action' : 'validateUser',
												'user_login' : $scope.userEmail,
												'user_password' : $scope.userPassword

											},

											success : function(data) {
												console.log(data);
												$scope
														.$apply(function() {
															$scope.status = data.status;
															$scope.statusCode = data.status_code;
															$scope.statusMessage = data.status_message;
															if ($scope.status == true) {
																$scope.user_role = data.user_role;
																console
																		.log($scope.user_role);
																if ($scope.user_role == 1) {
																	console
																			.log("Compared...");
																	$window.location = "admin.html";
																} else if ($scope.user_role == 2) {
																	$window.location = "student.html#/home/"
																			+ $scope.userEmail;

																} else if ($scope.user_role == 3) {
																	$window.location = "teacher.html#/home/"
																			+ $scope.userEmail;
                                                                     
																}
															}
														});
											}
										});

							};
							$scope.signUp = function() {
								$window.location = "newUser.html";
							};

						} ]);