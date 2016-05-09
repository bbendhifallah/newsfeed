(function(){
	var NewsController = function($location, $scope, NewsService, DetailsService) {
		function loadJson() {
			NewsService.getList().then(function(message) {
				
				var items = [];

				angular.forEach(message.data.query.results.item, function(item) {
					
					var dt = formatRssDate(item.pubDate);
					
					items.push({
						title: item.title,
						link: item.link,
						description: item.description,
						pubDate: dt,
						guid: item.guid.content,
						isPermaLink: item.guid.isPermaLink,
						image: item.enclosure.url
					});
				});

				$scope.selectItem = function (item) {
					DetailsService.setItem(item);
					$location.path('/details');
				};

				$scope.rows = chunk(items, 3);
			});
		}

		loadJson();
	};

	angular.module("feedApp").controller('NewsController', NewsController);

})();