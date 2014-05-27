myApp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/student', {
		templateUrl : 'partials/user/StudentForm.html',
		controller : 'studentProfileCtrl'
	}).when('/teacher', {
		templateUrl : 'partials/user/TeacherForm.html',
		controller : 'teacherProfileCtrl'
	}).when('/back', {
		templateUrl : 'newUser.html',
		controller : 'newUser_Ctrl'
	})
} ]);