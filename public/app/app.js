angular.module("varellasProject", ["cart", "photos", "route"])
	.controller("VarellasController", function ($scope, $location, $rootScope) {

		$scope.clear = function () {
			$rootScope.filter = "";
		};


		$scope.isActive = function (viewLocation) {
			return viewLocation === $location.path();
		};


	});