angular.module("cart")
	.factory("CartService", function ($rootScope) {
		$rootScope.cartQnt = 0;

		var products = [];
		


		//var total = 0;
		var service = {
			addtoCart: function (data) {
				products.push(data)
				$rootScope.cartQnt++;
				console.log(products, "produto");
				total += 20, 00;
				products.push(total);
				return products;
			},
			add: function (data) {
				$rootScope.cartQnt++;
				products.push(data);
				console.log("CartService" + "add()");
				console.log(products);
			},
			total: function () {
				var total = 0;
				for (product of products) {
					total += product.price;
				}
				return total;
			},
			list: function (){
				return products;
			}

		}

		return service;
	});