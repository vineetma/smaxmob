myApp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/home/:email', {
		templateUrl : 'partials/timetable/teacherTimeTable.html',
		controller : 'TeacherTimetableCtrl'
	}).when('/list/:email', {
		templateUrl : 'partials/studentslist.html',
		controller : 'studentlistCtrl'
	}).when('/teacher/:email/edit', {
		templateUrl : 'partials/user/TeacherForm.html',
		controller : 'teacherProfileCtrl'
	}).when('/timetable/:email', {
		templateUrl : 'partials/timetable/teacherTimeTable.html',
		controller : 'TeacherTimetableCtrl'
	}).when('/logout/:email', {
		templateUrl : 'partials/logout.html',
		controller : 'logoutCtrl'
	})
	.when('/classTimetable/:email', {
		templateUrl : 'partials/timetable/timetable.html',
		controller : 'weekTimeTableCtrl'
	});
} ]);
