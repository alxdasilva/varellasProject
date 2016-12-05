angular.module("photos", [])
	.controller("PhotosController", ["$scope", "$http", "CartService", "$rootScope", function ($scope, $http, CartService, $rootScope) {

		$scope.search = function (data) {
			$rootScope.filter = data;
		};

		$scope.addToCart = function (data) {
			CartService.addtoCart(data);
		};

		$http.get("/v1/fotos").success(function (data) {
			$scope.fotos = data;
		}).error(function (error) {
			console.log(erro);
		})

	}]);