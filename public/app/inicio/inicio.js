angular.module("cart")
.controller('inicio', function ($scope, $http) {

  		$http.get("/v1/fotos").success(function (data) {
			$scope.fotos = data;
		}).error(function (error) {
			console.log(erro);
		})
    
    
});