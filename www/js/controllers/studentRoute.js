/**
 * 
 */

myApp.config(['$routeProvider', function($routeProvider) {
$routeProvider.when('/edit/:email', {templateUrl: 'StudentForm.html',    
    controller: 'StudentCtrl'})
    
    .when('/navigation/:email',{templateUrl:'Student_menuForm.html',
    	controller:'Student_menuCtrl'})
    	
     .when('/add/', {templateUrl: 'newuserP.html',    
    controller: 'newUser_Ctrl'})
    
    .when('/add1/', {templateUrl: 'StudentForm.html',    
        controller: 'StudentCtrl'})
        
        .when ('/admin/', {templateUrl: 'admin_menuform.html',    
            controller: 'admin_Ctrl'})
            
            .when('/admin1/', {templateUrl: 'StudentForm.html',    
                controller: 'StudentCtrl'});
}]);
