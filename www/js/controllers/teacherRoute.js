/**
 * 
 */
myApp.config(['$routeProvider', function($routeProvider) {
$routeProvider.when('/edit/:email', {templateUrl: 'TeacherForm.html',    
    controller: 'TeacherCtrl'});
}]);
