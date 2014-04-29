myApp.controller('sysCtrl', [ '$scope', '$location',
		function($scope, $location) {
			console.log("In here..");
			$scope.main = {};
			$scope.main.title = "Test";
			$scope.isActive = function(viewLocation) {
				console.log(viewLocation, $location.path());
				return viewLocation == $location.path();
			};
		} ]);