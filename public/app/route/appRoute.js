angular.module("route", ["ngRoute"])
	.config(function ($routeProvider) {

		$routeProvider.when("/", {
				templateUrl: "app/photos/photos.html",
				controller: "PhotosController",
				activetab: "home"
			}),
			$routeProvider.when("/inicio", {
				templateUrl: "app/inicio/inicio.html",
				controller: "inicio",
				activetab: "inicio"
			}),
			$routeProvider.when("/cart", {
				templateUrl: "app/cart/cart.html",
				controller: "CartController",
				activetab: "cart"
			})
			.otherwise("/");


	});