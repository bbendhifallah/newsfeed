(function(){
	var DetailsController = function($scope, $cookies, DetailsService) {
		var item = DetailsService.getItem();

		if(item == undefined) {
			$scope.item = $cookies.getObject('item');
		}
		else {
			$cookies.putObject('item', item);
			$scope.item = DetailsService.getItem();
		}
	};

	angular.module("feedApp").controller('DetailsController', DetailsController);
})();