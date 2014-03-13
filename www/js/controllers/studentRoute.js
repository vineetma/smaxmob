/**
 * 
 */
myApp.config(['$routeProvider', function($routeProvider) {
$routeProvider.when('/edit/:email', {templateUrl: 'StudentForm.html',    
    controller: 'StudentCtrl'});
}]);
