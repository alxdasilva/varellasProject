angular.module("cart")
	.factory("CartService", function ($rootScope) {

		$rootScope.cartQnt = 0
		var service = {
			addtoCart: function (data) {
				$rootScope.cartQnt ++;
			}
		}

		return service;
	});