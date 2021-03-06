myApp.controller('adminCtrl', [ '$scope', '$window', '$http', '$routeParams',
		'$location', function($scope, $window, $http, $routeParams, $location) {
			console.log("In here..");
			$scope.main = {};
			$scope.main.title = "Admin";
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
			}, {
				'url' : '/',
				'text' : 'Students List',
				'class':'glyphicon glyphicon-th-list'
			}, {
				'url' : '/logout',
				'text' : 'Logout',
				'class':'glyphicon glyphicon-off'
			} ];

		} ]);