 myApp.controller('adminCtrl', ['$scope', '$window', '$http','$routeParams','$location',function ($scope, $window, $http,$routeParams,$location) {
    	console.log("In here..");
    	$scope.main={};
      	 $scope.main.menuItems = [{'url':'/', 'text':'Home'},{'url':'/student', 'text':'New Student'},
      	                          {'url':'/teacher', 'text':'New Teacher'},{'url':'/', 'text':'Students List'},
      	                          {'url':'/logout', 'text':'Logout'}];
   	
    }]);