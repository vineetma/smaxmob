/**
 * 
 */
myApp.config(['$routeProvider', function($routeProvider) {
$routeProvider.when('/edit/:email', {templateUrl: 'TeacherForm.html',    
    controller: 'TeacherCtrl'})
    .when('/navigation/:email',{templateUrl:'Teacher_menuForm.html',
    	controller:'Teacher_menuCtrl'});
}]);
