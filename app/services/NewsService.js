(function(){
	var NewsService = function($http) {
		this.getList = function() {
			var url = 'http://www.matchendirect.fr/rss/info.xml';
			var encoded = encodeURI('http://query.yahooapis.com/v1/public/yql?q=select * from rss where url = "' + url + '"&format=json');

			return $http.get(encoded).success(function(data, status, headers, config) {
				return data;
			}).
			error(function(data, status, headers, config) {
				return data;
			});
		};
	};

	angular.module("feedApp").service("NewsService", NewsService);
})();