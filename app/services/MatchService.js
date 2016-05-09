(function(){
	var MatchService = function($http) {
		this.getResults = function(country) {

			if(country=='france') {
				var url = 'http://www.matchendirect.fr/rss/foot-ligue-1-c16.xml';
			}
			else if(country=='spain') {
				var url = 'http://www.matchendirect.fr/rss/foot-primera-division-c7.xml';
			}

			var encoded = encodeURI('http://query.yahooapis.com/v1/public/yql?q=select * from rss where url = "' + url + '"&format=json');
			
			return $http.get(encoded).success(function(data, status, headers, config) {
				return data;
			}).
			error(function(data, status, headers, config) {
				return data;
			});
		};
	};

	angular.module("feedApp").service("MatchService", MatchService);
})();