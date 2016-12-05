angular.module("photos", [])
.controller("PhotosController",["$scope", "$http","CartService",  function ($scope, $http, CartService) {
		$scope.message = "PhotosController";
		
		$scope.addToCart = function(data){
			CartService.addtoCart(data);
		};
	
		$http.get("/v1/fotos").success(function(data){
			$scope.fotos = data;
		}).error(function(error){
			console.log(erro);
		})
		

	}]);