/**
 * 
 */
myApp.config(['$routeProvider', function($routeProvider) {
$routeProvider.when('/weekView/:deptt/:term/:section', {templateUrl: 'WeekTimeTable.html',    
    controller: 'weekTimeTableCtrl'})
    .when('/list',{templateUrl:'WeekTimeTable.html',
    	controller:'weekTimeTableCtrl'});
}]);
