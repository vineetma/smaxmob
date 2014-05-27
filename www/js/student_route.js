myApp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/home/:email', {
		templateUrl : 'partials/timetable/timetable.html',
		controller : 'weekTimeTableCtrl'
	}).when('/list1/:email', {
		templateUrl : 'partials/studentslist.html',
		controller : 'studentlistCtrl'
	}).when('/student/:email/edit1', {
		templateUrl : 'partials/user/StudentForm.html',
		controller : 'studentProfileCtrl'
	}).when('/timetable1/:email', {
		templateUrl : 'partials/timetable/timetable.html',
		controller : 'weekTimeTableCtrl'
	}).when('/logout/:email', {
		templateUrl : 'partials/logout.html',
		controller : 'logoutCtrl'
	});
} ]);
