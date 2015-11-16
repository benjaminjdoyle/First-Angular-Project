angular.module('app',[]).controller('CarController',function($scope){
	$scope.cars = [];
	$scope.car = {};
	$scope.createCar = function(){
		$scope.cars.push($scope.car);
		$scope.car = {};
		
	};

	$scope.editCar = function(car){
		$scope.isEditing = true;
		$scope.car = angular.copy(car);
		$scope.selectedCar = car;
	};
	
	$scope.saveEdit = function() {
		$scope.isEditing = false;
		$scope.cars[$scope.cars.indexOf($scope.selectedCar)] = $scope.car;
		$scope.car = {};
	};
	
	$scope.cancelEdit = function() {
		$scope.isEditing = false;
		$scope.car = {};
	};
});