(function(){
	var MatchController = function($scope, $routeParams, MatchService) {

		var country = $routeParams.country;

		if(country=='france') {
			$scope.league = 'France : Ligue 1';
		}
		else if(country=='spain') {
			$scope.league = 'Espagne : Liga BBVA';
		}

		$scope.formatRssDate = formatRssDate;

		function loadData() {
			MatchService.getResults(country).then(function(message) {
				$scope.items = message.data.query.results.item;
			});
		}

		loadData();
	};

	angular.module("feedApp").controller('MatchController', MatchController);

})();