myApp.controller('studentCtrl', [ '$scope', '$window', '$http', '$routeParams',
		'$location', function($scope, $window, $http, $routeParams, $location) {
			console.log("In studentCtrl", $location.path());
			$scope.main = {};
			var parts = $location.path().split('/');
			$scope.email = parts[2];
			
			$scope.main.menuItems = [ {
				'url' : '/home/' + $scope.email,
				'text' : 'Home',
				'class':'glyphicon glyphicon-home'
			}, {
				'url' : '/student/' + $scope.email + '/edit1',
				'text' : 'Profile',
				'class':'glyphicon glyphicon-user'
			}, {
				'url' : '/list1/' + $scope.email,
				'text' : 'Students List',
					'class':'glyphicon glyphicon-th-list'
			}, {
				'url' : '/timetable1/' + $scope.email,
				'text' : 'Timetable',
				'class':'glyphicon glyphicon-th-large'
			}, {
				'url' : '/logout/' + $scope.email,
				'text' : 'Logout',
				'class':'glyphicon glyphicon-off'
			} ];

		} ]);