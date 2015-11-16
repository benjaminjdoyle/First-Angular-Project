angular.module('app',[]).controller('CarController',function($scope){
	$scope.cars = [];
	$scope.car = {};
	$scope.createCar = function(){
		$scope.cars.push($scope.car);
		$scope.car = {};
		
	};
});