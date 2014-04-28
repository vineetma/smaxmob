 myApp.controller('teacherCtrl', ['$scope', '$window', '$http','$routeParams','$location',function ($scope, $window, $http,$routeParams,$location) {
    	console.log("In studentCtrl", $location.path());
    	$scope.main={};
    	var parts = $location.path().split('/');
      if($location.path() == '/logout') {
        $window.location = baseURL;
      }
    	$scope.email = parts[2];
      	 $scope.main.menuItems = [{'url':'/home/'+$scope.email, 'text':'Home'},
      	                          {'url':'/teacher/'+$scope.email+'/edit', 'text':'Profile'},
      	                          {'url':'/list/'+$scope.email, 'text':'Students List'},
      	                          {'url':'/timetable/'+$scope.email, 'text':'Timetable'},
      	                          {'url':'/logout/'+$scope.email, 'text':'Logout'}];
   	
    }]);

