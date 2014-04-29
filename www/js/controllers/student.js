myApp.controller('studentCtrl', [ '$scope', '$window', '$http', '$routeParams',
		'$location', function($scope, $window, $http, $routeParams, $location) {
			console.log("In studentCtrl", $location.path());
			$scope.main = {};
			var parts = $location.path().split('/');
			$scope.email = parts[2];
			$scope.main.menuItems = [ {
				'url' : '/home/' + $scope.email,
				'text' : 'Home'
			}, {
				'url' : '/student/' + $scope.email + '/edit1',
				'text' : 'Profile'
			}, {
				'url' : '/list1/' + $scope.email,
				'text' : 'Students List'
			}, {
				'url' : '/timetable1/' + $scope.email,
				'text' : 'Timetable'
			}, {
				'url' : '/logout/' + $scope.email,
				'text' : 'Logout'
			} ];

		} ]);