
var trees2013 = $("[year=2013]");

// Try 3 at creating year thingy

	var toggle2013 = document.getElementById('button2013');
	button2013.onclick = function() {
	    console.log('Show 2013 Trees!');
	    $("[year='2013']").animate({"opacity": 0});
	}

// Try 2 at creating year thingy

	// // Controls click listeners
	// document.getElementById("button2012").addEventListener("click", toggle2012);

	// // add coffee shops function
	// function toggle2012() {
	//     trees2012.animate({"opacity": .2}, "slow");
	// };



// Try 1 at creating year thingy

	// // Creating variables and layers
	// var t2013 = "year";
	// var ob13 = {};
	// ob13[t2013] = "2013";
	// console.log(ob13);

	// var t2014 = "year";
	// var ob14 = {};
	// ob14[t2014] = "2014";

	// var cities = L.layerGroup(ob13);
	// var cities14 = L.layerGroup(ob14);

	// var overlayMaps = {
	//     "2013 Trees": cities,
	//     "2014 Trees": cities14
	// };

	//Set Up The Map
	var map = L.map('map', {
		zoomControl: false,
		// layers: [cities, cities14]
	})
		.setView([37.8071415 , -122.2586092], 12);

	// L.control.layers(overlayMaps).addTo(map);

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

//Create My Custom Icon Variable
var treeIcon = L.icon({
	iconUrl:      'images/treeIcon.png',
	iconSize:     [30, 30],
	iconAnchor:   [15, 15],
	popupAnchor:  [0, -15] 
})


// layers: ["2013", "2014", "2015", "2016", "2017"]

//Load External geoJSON (WTF is pointToLayer???)
$.getJSON('./js/geoJSON.json',function(data){
	//why is this a var?
	var geojsonLayer = L.geoJson(data.features, {
		onEachFeature: makeMarkers,
		pointToLayer: function (feature, latlng) {
			//can you define the custom icon var here?
			return L.marker(latlng, {icon:treeIcon});
		}
	}).addTo(map);
});


function makeMarkers(feature, layer) {
	var thisFeature = feature.properties;
		// console.log(layer);
		// console.log(feature.properties.hTitle);
	layer.on("click", function(e){
		map.panTo(new L.LatLng(feature.geometry.coordinates[1],feature.geometry.coordinates[0]), {animate: true, duration: 1.0});
		// console.log(feature.properties.year);
		$('.name').text(feature.properties.name)
		$('.siteType').text(feature.properties.siteType)
		$('.address').text(feature.properties.address)
		$('.year').text(feature.properties.year)
		$('.treeCount').text(feature.properties.treeCount)
		$('.treeType').text(feature.properties.treeType)
		$('#photo').attr("src",feature.properties.photo)
	});

 };


//Defines what happens when marker is clicked

//function onClick(e) { //e is the event
//	console.log("boo")
//	console.log(this)
//	console.log("boo")
//};


//That hail mary that Chris found to first get geoJSON to use my custom markers

//function buttonSetup(feature, layer) {
//	layer.icon = houseIcon;
//	console.log(layer);
//  }


//function testFunction(feature, latlng) {
//	console.log("testfunction");
//	 return L.marker(latlng, {icon:houseIcon});
//}

//var geojsonLayer = new L.GeoJSON.AJAX("./js/geoJSON.json", 
//	{onEachFeature:buttonSetup,pointToLayer:testFunction});

//geojsonLayer.addTo(map);






