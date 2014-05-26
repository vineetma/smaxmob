myApp.controller('teacherCtrl', [ '$scope', '$window', '$http', '$routeParams',
		'$location', function($scope, $window, $http, $routeParams, $location) {
			console.log("In studentCtrl", $location.path());
			$scope.main = {};
			var parts = $location.path().split('/');
			if ($location.path() == '/logout') {
				$window.location = baseURL;
			}
			$scope.email = parts[2];
			$scope.main.title = "Teacher";
			
			$scope.main.menuItems = [ {
				'url' : '/home/' + $scope.email,
				'text' : 'Home',
				'class':'glyphicon glyphicon-home'
			}, {
				'url' : '/teacher/' + $scope.email + '/edit',
				'text' : 'Profile',
				'class':'glyphicon glyphicon-user'
			}, {
				'url' : '/classTimetable/' + $scope.email,
				'text' : 'Class Timetable',
				'class':'glyphicon glyphicon-th-large'
			}, {
				'url' : '/list/' + $scope.email,
				'text' : 'Students List',
				'class':'glyphicon glyphicon-th-list'
			}, {
				'url' : '/timetable/' + $scope.email,
				'text' : 'Timetable',
				'class':'glyphicon glyphicon-th-large'
			}, {
				'url' : '/logout/' + $scope.email,
				'text' : 'Logout',
					'class':'glyphicon glyphicon-off'
			} ];

		} ]);
