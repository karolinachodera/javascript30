var endpoint = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
var cities = [];
var input = document.querySelector("input[name='search']");
var matches = document.querySelector(".matches");

fetch(endpoint)
	.then(blob => blob.json())
	.then(data => cities.push(...data));

function findCity(wordToMatch, cities) {
	return cities.filter(place => {
		var regex = new RegExp(wordToMatch, 'gi');
		return place.city.match(regex) || place.state.match(regex);
	});
}

function displayMatches() {
	var matchesArray = findCity(this.value, cities);
	var html = matchesArray.map(place => {
		var regex = new RegExp(this.value, 'gi');
		var cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
		var stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
		return `<li>
					<span class="name">${cityName}, ${stateName}</span>
					<span class="population">${place.population}</span>
				</li>
				`;
	}).join('');
	matches.innerHTML = html;
}

input.addEventListener("change", displayMatches, false);
input.addEventListener("keyup", displayMatches, false);
