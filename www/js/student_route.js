myApp.config(['$routeProvider', function($routeProvider) {
$routeProvider.when('/home/:email', {templateUrl: 'partials/timetable/timetable.html', controller: 'weekTimeTableCtrl'})
    .when('/list/:email', {templateUrl: 'partials/studentslist.html', controller: 'studentlistCtrl'})
    .when('/student/:email/edit', {templateUrl: 'partials/user/StudentForm.html', controller: 'studentProfileCtrl'})
    .when('/timetable/:email', {templateUrl: 'partials/timetable/timetable.html', controller: 'weekTimeTableCtrl'})
    .when('/logout/:email', {templateUrl: 'partials/timetable/timetable.html', controller: 'studentlistCtrl'})
}]);
