angular.module("photos", [])
	.controller("PhotosController", ["$scope", "$http", "CartService", "$rootScope", function ($scope, $http, CartService, $rootScope) {

		$scope.products = [
        {
           id:1,
            name: "Product 1",
            description: "Description of item that Varellas want to put here.",
            price: 10,
            imagen: "producto.png"
        },
        {
           id:2,
            name: "Product 2",
            description: "Description of item that Varellas want to put here.",
            price: 16,
            imagen: "producto.png"
        },
        {
           id:3,
            name: "Product 3",
            description: "Description of item that Varella want to put here.",
            price: 22,
            imagen: "producto.png"
        }];

	}]);