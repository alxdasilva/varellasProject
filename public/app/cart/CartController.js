angular.module("cart", [])
	.controller("CartController", ["$scope", "CartService", function ($scope, CartService) {
		var cart = [];
		$scope.cart = cart;


		/*$scope.addToCart = function (data) {
			cart.push(CartService.addtoCart(data));
			console.log(cart);
		};*/

		$scope.addtoCart = function (data) {
			console.log("CartController" + "addToCart()");
			CartService.add(data);
		};
		$scope.list = function () {
		 return	CartService.list();
		};
		$scope.total = function(){
		return CartService.total();	
		};

	}]);