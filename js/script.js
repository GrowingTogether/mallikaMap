//Set Up The Map
	var map = L.map('map', {
		zoomControl: false,
		// layers: [cities, cities14]
	})
		.setView([37.8071415 , -122.2586092], 12);

//Set Up Basemap Tiles From Stamen
L.tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
	maxZoom: 17,
	minZoom: 11
}).addTo(map);
L.control.zoom({position: 'bottomleft'}).addTo(map);

//Setting up the scrollable boundaries of the Map - doesn't work
	// var corner1 = L.latLng(38.078390, -122.808915),
	// corner2 = L.latLng(37.697805, -122.079851),
	// bounds = L.latLngBounds(corner1, corner2);

	// map.fitBounds([
	//     [38.078390, -122.808915],
	//     [37.697805, -122.079851]
	// ]);

//Create My Custom Icon 
var treeIcon = L.icon({
	iconUrl:      'images/treeIcon.png',
	iconSize:     [30, 30],
	iconAnchor:   [15, 15],
	popupAnchor:  [0, -15] 
})

// Add the filtered GeoJSON element to our Map
// starbucksPoints.addTo(map)

//Load External geoJSON but don't add to map
// var myJson = $.getJSON('./js/geoJSON.json',function(data){});

//Load External geoJSON
var myJson = $.getJSON('./js/geoJSON.json',function(data){
	var geojsonLayer = L.geoJson(data.features, {
		onEachFeature: makeMarkers,
		pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon:treeIcon});
		}
	}).addTo(map);
});

// Failed Attempt at creating Variables
// var trees2013 = $("[year=2013]");

// Try 3 Creating Variables

var trees2013_3 = L.geoJson(myJson, {filter: year2013get});
// var trees2013_3 = L.geoJson(myJson, {filter: year2013get}).addTo(map);

function year2013get(feature) {
  if (feature.properties.year === "2013") return true
}

// Try 3 at getting a year selector button

	var toggle2013 = document.getElementById('button2013');
	button2013.onclick = function() {
	    console.log('Show 2013 Trees!');
	    console.log(trees2013_3);
	    $('trees2013_3').animate({"opacity": .1});
	}

function makeMarkers(feature, layer) {
	var thisFeature = feature.properties;
		// console.log(layer);
		// console.log(feature.properties.hTitle);
	layer.on("click", function(e){
		map.panTo(new L.LatLng(feature.geometry.coordinates[1],feature.geometry.coordinates[0]), {animate: true, duration: 1.0});
		console.log(feature.properties.year);
		console.log(feature.properties.siteType);
		$('.name').text(feature.properties.name)
		$('.siteType').text(feature.properties.siteType)
		$('.address').text(feature.properties.address)
		$('.year').text(feature.properties.year)
		$('.treeCount').text(feature.properties.treeCount)
		$('.treeType').text(feature.properties.treeType)
		$('#photo').attr("src",feature.properties.photo)
	});

 };


