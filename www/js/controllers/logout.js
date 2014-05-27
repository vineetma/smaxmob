myApp.controller('logoutCtrl', [ '$scope', '$location','$window',
		function($scope, $location,$window) {
			console.log("In here..");
			if ($location.path().split('/')[1] == 'logout') {
				//alert("URL"+baseURL);
				$window.location = "index.html";
			}
		} ]);