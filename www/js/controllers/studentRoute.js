/**
 * 
 */
myApp.config(['$routeProvider', function($routeProvider) {
$routeProvider.when('/edit/:email', {templateUrl: 'StudentForm.html',    
    controller: 'StudentCtrl'})
    .when('/navigation/:email', {templateUrl: 'Student_menuForm.html',    
        controller: 'Student_menuCtrl'});

}]);
