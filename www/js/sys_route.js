myApp.config(['$routeProvider', function($routeProvider) {
$routeProvider.when('/', {templateUrl: 'partials/login.html',    
    controller: 'loginCtrl'});
}]);
