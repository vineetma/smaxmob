 
 myApp.controller('newUser_Ctrl', [ '$scope', '$window', '$http', '$routeParams',
                         		'$location', function($scope, $window, $http, $routeParams, $location) {
                         			console.log("In here..");
                         			$scope.main = {};
                         			$scope.main.title = "New User";
                         			$scope.main.menuItems = [ {
                         				'url' : '/',
                         				'text' : 'Home',
                        				'class':'glyphicon glyphicon-home'
                         			}, {
                         				'url' : '/student',
                         				'text' : 'New Student',
                        				'class':'glyphicon glyphicon-user'
                         			}, {
                         				'url' : '/teacher',
                         				'text' : 'New Teacher',
                        				'class':'glyphicon glyphicon-user'
                         			} ];

                         		} ]);