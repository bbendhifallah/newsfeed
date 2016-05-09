function chunk(arr, size) {
	var newArr = [];

	for (var i=0; i<arr.length; i+=size) {
		newArr.push(arr.slice(i, i+size));
	}
	return newArr;
}

var formatRssDate = function formatRssDate(pubDate) {
	var date = new Date(pubDate);
	var months = Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");
	var dt = date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear()
	
	var hr = (date.getHours() < 10 ? '0' : '') + date.getHours();
	var mn = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();

	var display = "Le " + dt + " à " + hr + "h" + mn;

	return display;
}