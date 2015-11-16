angular.module('app',[]).controller('CarController',function($scope){
	$scope.cars = [];
	$scope.createCar = function(){
		var car = {
			model: $scope.model,
			color: $scope.color,
			year: $scope.year
		};
		$scope.cars.push(car);
		$scope.model = '';
		$scope.color = '';
		$scope.year = '';
		
	};
});