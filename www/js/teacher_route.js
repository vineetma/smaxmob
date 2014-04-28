myApp.config(['$routeProvider', function($routeProvider) {
$routeProvider
	.when('/home/:email', {templateUrl: 'partials/timetable/teacherTimeTable.html', controller: 'TeacherTimetableCtrl'})
    .when('/list/:email', {templateUrl: 'partials/studentslist.html', controller: 'studentlistCtrl'})
    .when('/teacher/:email/edit', {templateUrl: 'partials/user/TeacherForm.html', controller: 'teacherProfileCtrl'})
    .when('/timetable/:email', {templateUrl: 'partials/timetable/teacherTimeTable.html', controller: 'TeacherTimetableCtrl'})
    .when('/logout/:email', {templateUrl: 'partials/user/TeacherForm.html', controller: 'studentlistCtrl'})
}]);
