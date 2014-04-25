myApp.config(['$routeProvider', function($routeProvider) {
$routeProvider.when('/', {templateUrl: 'partials/studentslist.html', controller: 'studentlistCtrl'})
    .when('/student', {templateUrl: 'partials/user/StudentForm.html', controller: 'studentProfileCtrl'})
    .when('/teacher', {templateUrl: 'partials/user/TeacherForm.html', controller: 'teacherProfileCtrl'})
    .when('/logout', {templateUrl: 'partials/studentslist.html', controller: 'studentlistCtrl'})
}]);
