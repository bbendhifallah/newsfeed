(function(){
	var DetailsService = function() {

		var item;

		this.setItem = function(i) {
			item = i;
		};

		this.getItem = function() {
			return item;
		};
	};

	angular.module("feedApp").service("DetailsService", DetailsService);
})();