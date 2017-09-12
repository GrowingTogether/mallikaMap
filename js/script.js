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

// Failed Attempt at creating Variables
// var trees2013 = $("[year=2013]");

// Try 3 Creating Variables

// var trees2013_3 = L.geoJson(myJson, {filter: year2013get});
// var trees2013_3 = L.geoJson(myJson, {filter: year2013get}).addTo(map);

// function year2013get(feature) {
//   if (feature.properties.year === "2013") return true
// }

// Try 3 at getting a year selector button

	// var toggle2013 = document.getElementById('button2013');
	// button2013.onclick = function() {
	//     console.log('Show 2013 Trees!');
	//     console.log(trees2013_3);
	//     $('trees2013_3').animate({"opacity": .1});
	// }
//  };

// // Load External geoJSON
// var treePoints = $.getJSON('./js/geoJSON.json',function(data){
// 	// var geojsonLayer = L.geoJson(data.features, {
// 	// 	onEachFeature: makeMarkers,
// 	// 	pointToLayer: function (feature, latlng) {
// 	// 		return L.marker(latlng, {icon:treeIcon});
// 		});


var treePoints = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.2166136,
          37.7818394
        ]
      },
      "properties": {
        "siteNumber": "1",
        "photo": "images/1.jpg",
        "year": "2013",
        "name": "First Planting: Canticle Farm and 36th Ave Apartments",
        "siteType": "Residences",
        "address": "2000 36th ave",
        "treeCount": "17",
        "treeType": "2 Cherries, 3 Plums, 3 Apples, 2 Pears, 2 Figs, 1 Persimmon, 2 Lemon"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.4351556,
          38.5663325
        ]
      },
      "properties": {
        "siteNumber": "2",
        "photo": "images/2.jpg",
        "year": "2013",
        "name": "55th St and Genoa Neighbors",
        "siteType": "Residences",
        "address": "861 55th st",
        "treeCount": "12",
        "treeType": "2 Cherries, 2 Plums, 2 Apples, 2 Pears, 2 Figs, 2 Persimmon"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.2798775,
          37.8428904
        ]
      },
      "properties": {
        "siteNumber": "3",
        "photo": "images/3.jpg",
        "year": "2013",
        "name": "OPTIONS Recovery Services",
        "siteType": "Service Provider",
        "address": "1020 59th st, Oakland CA 94608",
        "treeCount": "12",
        "treeType": "2 Cherries, 2 Plums,2  Apples, 2 Pears, 2 Figs, 1 Persimmon, 1 Lemon"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.2608438,
          37.8338172
        ]
      },
      "properties": {
        "siteNumber": "4",
        "photo": "images/4.jpg",
        "year": "2013",
        "name": "Oakland International High School",
        "siteType": "School",
        "address": "4521 Webster Street, Oakland, CA 94609",
        "treeCount": "10",
        "treeType": "2 Cherries, 2 Plums, 1 Apples, 1 Pears, 1 Figs, 1 Persimmon, 1 Orange, 1 Pomegranate"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.268202,
          37.842641
        ]
      },
      "properties": {
        "siteNumber": "5",
        "photo": "images/5.jpg",
        "year": "2013",
        "name": "Donitra Henderson Dedication Planting w/ Phat Beets",
        "siteType": "Park / Community Garden",
        "address": "5707 Dover Street, Oakland",
        "treeCount": "2",
        "treeType": "Santa Rosa Plum, Orange"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.2854683,
          37.8462189
        ]
      },
      "properties": {
        "siteNumber": "6",
        "photo": "images/6.jpg",
        "year": "2013",
        "name": "Urban Permaculture Institute @ PLACE for Sustainable Living",
        "siteType": "Streetside",
        "address": "1121 64th Street, Oakland, CA 94608",
        "treeCount": "3",
        "treeType": "Fig, Lemon, Avocado"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.1882505,
          37.7722874
        ]
      },
      "properties": {
        "siteNumber": "7",
        "photo": "images/7.jpg",
        "year": "2013",
        "name": "Community Rejuvenation Project + neighbors",
        "siteType": "Residences",
        "address": "2721 60th Ave",
        "treeCount": "13",
        "treeType": "4 Cherries, 3 Meyer Lemons, 2 Bartlett Pears, 2 Asian Pears, 2 Apples"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.1770462,
          37.7279845
        ]
      },
      "properties": {
        "siteNumber": "8",
        "photo": "images/x.jpg",
        "year": "2013",
        "name": "Sobrante Park school garden",
        "siteType": "School",
        "address": "470 El Paseo Drive Oakland, CA 94603",
        "treeCount": "6",
        "treeType": "Orange, Lemon, 2 Asian Pears, 2 Apples"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.165645,
          37.7635577
        ]
      },
      "properties": {
        "siteNumber": "9",
        "photo": "images/9.jpg",
        "year": "2013",
        "name": "POOR Magazine Pachamama Garden",
        "siteType": "Community Center",
        "address": "8034 MacArthur Blvd",
        "treeCount": "8",
        "treeType": "Fig, Cherry, 2 Avocados, Apple, Lemon, Orange, Asian Pear, Plum"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.1640862,
          37.7591887
        ]
      },
      "properties": {
        "siteNumber": "10",
        "photo": "images/?.jpg",
        "year": "2013",
        "name": "Castlemont Farm",
        "siteType": "School",
        "address": "8601 MacArthur Blvd",
        "treeCount": "3",
        "treeType": "1 Fig, 2 Citrus"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.4398839,
          37.7892488
        ]
      },
      "properties": {
        "siteNumber": "11",
        "photo": "images/?.jpg",
        "year": "2013",
        "name": "Spiral Gardens",
        "siteType": "Community Garden",
        "address": "2850 Sacramento St",
        "treeCount": "2",
        "treeType": "Fig, Asian Pear"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.2854683,
          37.8462189
        ]
      },
      "properties": {
        "siteNumber": "12",
        "photo": "images/x.jpg",
        "year": "2013",
        "name": "PLACE for Sustainable Living",
        "siteType": "Community Center",
        "address": "1121 64th Street, Oakland, CA 94608",
        "treeCount": "8",
        "treeType": "1 Red Fuji Nagafu, 1 Apple, 1 Shinko Asian Pear, 1 Hosui Asian Pear, 1 Mexicola Avocado, 1 Meyer Lemon, 2 Trovita Oranges, 2 Loquats"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.2766884,
          37.8233835
        ]
      },
      "properties": {
        "siteNumber": "13",
        "photo": "images/13.jpg",
        "year": "2013",
        "name": "St. Mary's Center Garden",
        "siteType": "Service Provider",
        "address": "925 Brockhurst Street Oakland, CA 94608",
        "treeCount": "8",
        "treeType": "Gibson Golden Delicious Apple, Red Fuji Apple, Shinko Asian Pear, Hosui Asian Pear, Meyer Lemon, Stella Cherry, Trouvita Orange, Santa Rosa Plum"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.225238,
          37.7801769
        ]
      },
      "properties": {
        "siteNumber": "14",
        "photo": "images/14.jpg",
        "year": "2013",
        "name": "Oakland Youth Revolution Garden and Community Center",
        "siteType": "Community Center",
        "address": "3026 East 16th St, Oakland",
        "treeCount": "7",
        "treeType": "Red Fuji Nagafu Apple, Hosui Asian pear, Mexicola Avocado, Stella Cherry, Meyer Lemon, Trouvita Orange, Moro Blood Orange"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.2822971,
          37.8259304
        ]
      },
      "properties": {
        "siteNumber": "15",
        "photo": "images/15.jpg",
        "year": "2013",
        "name": "City Slickers West Oakland Gardeners",
        "siteType": "Residences",
        "address": "3399 Peralta St, Oakland, CA 94608",
        "treeCount": "14",
        "treeType": "3 Meyer Lemon, 2 Asian Pear-Hosui, 3 Asian Pear-Shinko, 2 Honeycrisp Apple, 2 Gibson Golden Delicious, 1 Stella Cherry, 2 Blood Orange"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.1736205,
          37.7376349
        ]
      },
      "properties": {
        "siteNumber": "16",
        "photo": "images/16.jpg",
        "year": "2013",
        "name": "Stonehurst Elementary",
        "siteType": "School",
        "address": "E st. and 103rd ave",
        "treeCount": "10",
        "treeType": "Gibson Golden Delicious Apple, Newtown Pippin Apple, Hosui Asian Pear, Shinko Asian Pear, Trouvita Orange, Moro Blood Orange, Bartlett Pear, Black Amber Plum, J.H. Hale Peach; Fig"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.2820366,
          37.8528625
        ]
      },
      "properties": {
        "siteNumber": "17",
        "photo": "images/17.jpg",
        "year": "2013",
        "name": "Ashby Community Garden",
        "siteType": "Community Garden",
        "address": "1370 Ashby Avenue, Berkeley",
        "treeCount": "8",
        "treeType": "2 Avocados, 2 Apples, Pear, Asian Pear, Lemon, Orange"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.1770462,
          37.7279845
        ]
      },
      "properties": {
        "siteNumber": "18",
        "photo": "images/18.jpg",
        "year": "2013",
        "name": "Sobrante Park + Boxing association",
        "siteType": "School",
        "address": "470 El Paseo Drive, Oakland, CA 94603",
        "treeCount": "8",
        "treeType": "2 Santa Rosa Plums, 2 Mariposa Plums, 2 Black Amber Plums, 3 Apples"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.2342666,
          37.7840228
        ]
      },
      "properties": {
        "siteNumber": "19",
        "photo": "images/x.jpg",
        "year": "2013",
        "name": "La Biblioteca and neighbors",
        "siteType": "Community Center",
        "address": "2334 E 15th st, Oakland",
        "treeCount": "8",
        "treeType": "2 Meyer Lemon, 2 Santa Rosa Plum, 2 Apple, 2 Pears"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.2483261,
          37.7926586
        ]
      },
      "properties": {
        "siteNumber": "20",
        "photo": "images/x.jpg",
        "year": "2013",
        "name": "Franklin Community Center",
        "siteType": "Community Center",
        "address": "1010 E 15th St, Oakland",
        "treeCount": "2",
        "treeType": "Fig, Lemon"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.1907594,
          37.7592692
        ]
      },
      "properties": {
        "siteNumber": "21",
        "photo": "images/21.jpg",
        "year": "2013",
        "name": "Rudsdale Continuation High School",
        "siteType": "School",
        "address": "1180 70th Ave",
        "treeCount": "3",
        "treeType": "Avocado, Apple, Pear"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.2702575,
          37.8589989
        ]
      },
      "properties": {
        "siteNumber": "22",
        "photo": "images/22.jpg",
        "year": "2013",
        "name": "King CDC Garden with Compassionate Leaders",
        "siteType": "School",
        "address": "1939 Ward St, Berkeley, CA 94703",
        "treeCount": "3",
        "treeType": "Plum, Fig, Apple"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.268202,
          37.842641
        ]
      },
      "properties": {
        "siteNumber": "23",
        "photo": "images/23.jpg",
        "year": "2014",
        "name": "MLK Day of Service w/ Phat Beets",
        "siteType": "Park",
        "address": "5707 Dover St, Oakland",
        "treeCount": "1",
        "treeType": "Apple"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.2788393,
          37.8265307
        ]
      },
      "properties": {
        "siteNumber": "24",
        "photo": "images/24.jpg",
        "year": "2014",
        "name": "California Hotel People's Grocery Orchard Planting",
        "siteType": "Community Garden",
        "address": "35th St and Chestnut, oakland",
        "treeCount": "17",
        "treeType": "1 Lemon, 2 Persimmon, 2 Apple, 2 Fig, 2 Pear, 2 Apricot, 2 Cherries, 1 Pluot, 1 Plum, 1 Pomegranate"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.1658439,
          37.7461254
        ]
      },
      "properties": {
        "siteNumber": "25",
        "photo": "images/25.jpg",
        "year": "2014",
        "name": "PUEBLO Leafing Out @ Elmhurst Community Prep",
        "siteType": "Streetside",
        "address": "1800 98th ave, Oakland",
        "treeCount": "38",
        "treeType": "11 Quercus rubrum, 10 Acer B., 17 Acer rubrum"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.2989417,
          37.8118941
        ]
      },
      "properties": {
        "siteNumber": "26",
        "photo": "images/26.jpg",
        "year": "2014",
        "name": "Trees 4 Life Ceremony",
        "siteType": "Residence",
        "address": "Wood and 12th st",
        "treeCount": "4",
        "treeType": "2 Plum, 2 Apple"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.2746088,
          37.8408719
        ]
      },
      "properties": {
        "siteNumber": "27",
        "photo": "images/27.jpg",
        "year": "2014",
        "name": "Black History is Every Month w/ Phat Beets + Self Help Hunger Program",
        "siteType": "Park",
        "address": "5650 Adeline St, Oakland, CA",
        "treeCount": "2",
        "treeType": "Apple, Lemon"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.1747078,
          37.7358109
        ]
      },
      "properties": {
        "siteNumber": "28",
        "photo": "images/x.jpg",
        "year": "2014",
        "name": "PUEBLO Leafing Out @ Stonehurst Elementary",
        "siteType": "Streetside",
        "address": "901 105th Ave, Oakland CA ",
        "treeCount": "5",
        "treeType": "5 Quercus Agrifolia"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.1747078,
          37.7368109
        ]
      },
      "properties": {
        "siteNumber": "29",
        "photo": "images/29.jpg",
        "year": "2014",
        "name": "PUEBLO Leafing Out @ Castlemont H.S.",
        "siteType": "Streetside/ School",
        "address": "MacArthur Blvd between 85th ave – 95th ave",
        "treeCount": "29",
        "treeType": "On Campus: 4 Podocarpus, 1 Laurel, 2 Quercus rubrum; Streetside: 10 Quercus rubrum, 8 Laurelus, 4 Podocarpus"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.268202,
          37.842641
        ]
      },
      "properties": {
        "siteNumber": "30",
        "photo": "images/30.jpg",
        "year": "2014",
        "name": "North Oakland Restorative Justice Council Planting",
        "siteType": "Park",
        "address": "5707 Dover St, Oakland, CA 94609",
        "treeCount": "2",
        "treeType": "Plum, Pomegranate"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.1949756,
          37.790923
        ]
      },
      "properties": {
        "siteNumber": "31",
        "photo": "images/31.jpg",
        "year": "2014",
        "name": "Full Harvest Urban Farm Arbor Day Celebration",
        "siteType": "Community Garden",
        "address": "3746 39th Ave, Oakland CA 94619",
        "treeCount": "10",
        "treeType": "2 Asian Pears, 2 Avocados, 4 Pineapple Guavas, 1 Moro Blood Orange, 1 Tangerine"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.2205309,
          37.7733512
        ]
      },
      "properties": {
        "siteNumber": "32",
        "photo": "images/32.jpg",
        "year": "2014",
        "name": "ASCEND Academy parking lot",
        "siteType": "School",
        "address": "3709 E. 12th St, Oakland, CA 94601",
        "treeCount": "6",
        "treeType": "2 Apples, 1 Fig, 1 Orange, 1 Tangerine, 1 Pineapple Guava"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.2702,
          37.837873
        ]
      },
      "properties": {
        "siteNumber": "33",
        "photo": "images/33.jpg",
        "year": "2014",
        "name": "100 Trees For Peace - North Oakland Restorative Justice Council",
        "siteType": "Residence",
        "address": "53rd St, btwn Genoa St and MLK Jr. Way",
        "treeCount": "1",
        "treeType": "1 Fig"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.1538652,
          37.7658369
        ]
      },
      "properties": {
        "siteNumber": "34",
        "photo": "images/34.jpg",
        "year": "2014",
        "name": "100 Trees For Peace - Sojourner Truth Middle School",
        "siteType": "School",
        "address": "8251 Fontaine Street, Oakland, CA 94605",
        "treeCount": "3",
        "treeType": "1 Owari Satsuma Tangerine, 1 Hosui Asian Pear, 1 Honeycrisp Apple"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.2586092,
          37.8071415
        ]
      },
      "properties": {
        "siteNumber": "35",
        "photo": "images/35.jpg",
        "year": "2014",
        "name": "100 Trees For Peace - Victory Garden Foundation @ the Gardens at Lake Merritt",
        "siteType": "Community Garden",
        "address": "666 Bellevue Ave, Oakland",
        "treeCount": "3",
        "treeType": "1 Blood Orange, 1 Pineapple Guava, 1 Pomegranate"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.279889,
          37.855542
        ]
      },
      "properties": {
        "siteNumber": "36",
        "photo": "images/36.jpg",
        "year": "2014",
        "name": "100 Trees For Peace - Spiral Gardens",
        "siteType": "Community Garden",
        "address": "2850 Sacramento St, Berkeley, CA 94702",
        "treeCount": "3",
        "treeType": "1 Oro Blanco Grapefruit, 1 Fig, 1 Cherimoya"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.2982832,
          37.8763592
        ]
      },
      "properties": {
        "siteNumber": "37",
        "photo": "images/37.jpg",
        "year": "2014",
        "name": "100 Trees For Peace - Franklin Child Development Center",
        "siteType": "School",
        "address": "1460 8th St. Berkeley, 94710",
        "treeCount": "4",
        "treeType": "1 Apricot, 1 Lime, 1 Satsuma, 1 Stella Cherry"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.2631464,
          37.7968647
        ]
      },
      "properties": {
        "siteNumber": "38",
        "photo": "images/38.jpg",
        "year": "2014",
        "name": "100 Trees For Peace - Laney College Garden + International Rescue Commitee (IRC)",
        "siteType": "Community Garden",
        "address": "900 Fallon St",
        "treeCount": "6",
        "treeType": "Fig, Pomegranate, Meyer Lemon, Eureka Lemon, Tangerine, Lime"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.2834806,
          37.8025174
        ]
      },
      "properties": {
        "siteNumber": "39",
        "photo": "images/39.jpg",
        "year": "2014",
        "name": "100 Trees For Peace - People's Grocery Garden",
        "siteType": "Community Garden",
        "address": "909 7th St, Oakland, CA 94607",
        "treeCount": "5",
        "treeType": "Bearss Lime, Meyer Lemon, Avocado, Asian Pear, Honeycrisp Apple"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.1870694,
          37.752424
        ]
      },
      "properties": {
        "siteNumber": "40",
        "photo": "images/40.jpg",
        "year": "2014",
        "name": "100 Trees For Peace - Oakland LEAF @ EnCompass Academy",
        "siteType": "School",
        "address": "1025 81st Ave, Oakland, CA 94621",
        "treeCount": "16",
        "treeType": "2 Tangerine, 1 Meyer Lemon, 2 Asian Pears, 1 Fuyu Persimmon, 2 Pineapple Guava, 2 Pomegranates, 2 Apples, 1 Blood Orange; Kindergarten Garden: 2 Tangerine, 1 Apple"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.1695638,
          37.7671896
        ]
      },
      "properties": {
        "siteNumber": "41",
        "photo": "images/41.jpg",
        "year": "2014",
        "name": "100 Trees For Peace - PUEBLO Cocina",
        "siteType": "Community Center",
        "address": "7633 Macarthur Blvd",
        "treeCount": "17",
        "treeType": "2 Eureka Lemon, 2 Trovita Orange, 1 Fremont Mandarin, 1 Fuji Apple, 4 Figs, 1 Asian Pear, 1 Apricot, 1 Persimmon, 1 Blood Orange, 2 Avocados"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.2489328,
          37.7936169
        ]
      },
      "properties": {
        "siteNumber": "42",
        "photo": "images/42.jpg",
        "year": "2014",
        "name": "100 Trees For Peace - Victory Garden Foundation @ Franklin Elementary",
        "siteType": "School",
        "address": "915 Foothill Blvd. Oakland, CA 94606",
        "treeCount": "9",
        "treeType": "Asian Pear, Tangerine, Blood Orange, 2 Avocados, Cherry, 2 Fig, Apple"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.2617897,
          37.8388566
        ]
      },
      "properties": {
        "siteNumber": "43",
        "photo": "images/?.jpg",
        "year": "2014",
        "name": "100 Trees For Peace - North Oakland Victory Garden",
        "siteType": "Community Garden",
        "address": "5316 Telegraph",
        "treeCount": "5",
        "treeType": "Honeycrisp Apple, Pineapple Guava, Asian Pear, Persimmon, Cherry"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.2281473,
          37.7797616
        ]
      },
      "properties": {
        "siteNumber": "44",
        "photo": "images/?.jpg",
        "year": "2014",
        "name": "100 Trees For Peace - Victory Garden Foundation @ Cohen Bray House",
        "siteType": "Community Center",
        "address": "1440 29th St, Oakland 94601",
        "treeCount": "8",
        "treeType": "Elderberry, Pomegranate, Pineapple Guava, Fig, 2 Asian Pears, Apple, Blood Orange"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.165612,
          37.789553
        ]
      },
      "properties": {
        "siteNumber": "45",
        "photo": "images/45.jpg",
        "year": "2014",
        "name": "100 Trees For Peace - Merritt College - Landscape Horticulture Department Permaculture Hillside",
        "siteType": "School",
        "address": "12500 Campus Drive, Oakland, California 94619",
        "treeCount": "20",
        "treeType": "1 Hosui Asian Pear, 1 20th C Asian Pear, 4 Trouvita Oranges, 2 Eureka Lemons, 4 Hachiya Persimmons, 1 Inca Plum, 1 Beauty Plum, 1 Northen Spy Apple, 1 Newtown Pippin Apple, 1 Honeycrisp Apple,1 Comice Pear, 2 Blenheim Apricots"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.2617319,
          37.8441245
        ]
      },
      "properties": {
        "siteNumber": "46",
        "photo": "images/46.jpg",
        "year": "2014",
        "name": "Memorial Tabernacle Church",
        "siteType": "Place of Worship",
        "address": "5801 Racine St, Oakland",
        "treeCount": "1",
        "treeType": "Santa Rosa Plum"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.280639,
          37.837893
        ]
      },
      "properties": {
        "siteNumber": "47",
        "photo": "images/47.jpg",
        "year": "2014",
        "name": "North Oakland Restorative Justice Council - Memorial Planting for Isaiah Sudan",
        "siteType": "Residence",
        "address": "54th St, btwn San Pablo Ave and Gaskill St",
        "treeCount": "1",
        "treeType": "White Genoa Fig"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.2780362,
          37.842686
        ]
      },
      "properties": {
        "siteNumber": "48",
        "photo": "images/48.jpg",
        "year": "2014",
        "name": "Destiny Arts Center",
        "siteType": "Community Center",
        "address": "970 Grace Avenue, Oakland, CA 94608",
        "treeCount": "9",
        "treeType": "3 Pineapple Guava, 2 Meyer Lemon, 1 Hachiya Persimmon, 1 Newtown Pippin Apple, 1 Hosui Asian Pear, 1 20th Century Asian Pear"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.2608283,
          37.8166762
        ]
      },
      "properties": {
        "siteNumber": "49",
        "photo": "images/49.jpg",
        "year": "2015",
        "name": "Oakland Peace Center- Planting for Racial Justice",
        "siteType": "Community Center",
        "address": "111 Fairmount Ave, Oakland, CA 94611",
        "treeCount": "2",
        "treeType": "Lemon, Fig"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.2611675,
          37.8145463
        ]
      },
      "properties": {
        "siteNumber": "50",
        "photo": "images/50.jpg",
        "year": "2015",
        "name": "Westlake Middle School",
        "siteType": "School",
        "address": "2629 Harrison st, Oakland",
        "treeCount": "33",
        "treeType": "Hillside: 2 Avocados, 2 Olives, 2 Figs, 2 Apples, 2 Asian Pears, 1 Mulberry, 2 Elderberry, 1 Persimmon; Courtyard: 2 Lemons, 4 Oranges, 7 Tangerines, 3 Pomegranates, 3 Pineapple Guavas"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.4360481,
          37.5407246
        ]
      },
      "properties": {
        "siteNumber": "51",
        "photo": "images/51.jpg",
        "year": "2015",
        "name": "Three Hearts Urban Food Forest",
        "siteType": "Community Garden",
        "address": "Richmond",
        "treeCount": "6",
        "treeType": "Misc trees"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.2979012,
          37.8868088
        ]
      },
      "properties": {
        "siteNumber": "52",
        "photo": "images/52.jpg",
        "year": "2015",
        "name": "Gill Tract Community Farm",
        "siteType": "Community Garden",
        "address": "San Pablo Ave and Marin Ave, Albany, CA 94706",
        "treeCount": "8",
        "treeType": "Pineapple Guava Shrubs, Elderberry Shrubs, Dwarf Citrus"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.1633355,
          37.758108
        ]
      },
      "properties": {
        "siteNumber": "53",
        "photo": "images/53.jpg",
        "year": "2015",
        "name": "Youth Uprising Youth Center",
        "siteType": "Community Center",
        "address": "8711 MacArthur Blvd, Oakland, CA 94605",
        "treeCount": "6",
        "treeType": "Apple, Plum, Orange, Fig, Pomegranate, Apricot"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.1658439,
          37.7461254
        ]
      },
      "properties": {
        "siteNumber": "54",
        "photo": "images/54.jpg",
        "year": "2015",
        "name": "Alliance Academy",
        "siteType": "School",
        "address": "1800 98th Ave, Oakland, CA 94603",
        "treeCount": "5",
        "treeType": "1 Lemon, 2 Oranges, 2 Apples"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.2017352,
          37.819656
        ]
      },
      "properties": {
        "siteNumber": "55",
        "photo": "images/55.jpg",
        "year": "2015",
        "name": "Montera Middle School",
        "siteType": "School",
        "address": "5555 Ascot Dr, Oakland, CA 94611",
        "treeCount": "8",
        "treeType": "2 Lemons, 2 oranges, 2 pineapple guava, 2 apples"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.2969462,
          37.8072697
        ]
      },
      "properties": {
        "siteNumber": "56",
        "photo": "images/56.jpg",
        "year": "2015",
        "name": "Bottoms Up Garden",
        "siteType": "Community Garden",
        "address": "814 Peralta St, Oakland, CA 94607",
        "treeCount": "8",
        "treeType": "Miscellaneous Fruit Trees "
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.213433,
          37.7797195
        ]
      },
      "properties": {
        "siteNumber": "57",
        "photo": "images/57.jpg",
        "year": "2015",
        "name": "Global Family Elementary",
        "siteType": "School",
        "address": "2035 40th Ave, Oakland, CA 94601",
        "treeCount": "14",
        "treeType": "3 Lemons, 4 Tangerines, 3 Orangea, 4 Pineapple Guavas"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.1640862,
          37.7591887
        ]
      },
      "properties": {
        "siteNumber": "58",
        "photo": "images/58.jpg",
        "year": "2015",
        "name": "Castlemont H.S. Food Forest",
        "siteType": "School",
        "address": "8601 MacArthur Blvd",
        "treeCount": "4",
        "treeType": "Pineapple Guava, White Sapote, Elderberry, Persimmon"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.2751222,
          37.8232723
        ]
      },
      "properties": {
        "siteNumber": "59",
        "photo": "images/59.jpg",
        "year": "2016",
        "name": "Hoover Elementary Garden",
        "siteType": "School",
        "address": "890 Brockhurst St, Oakland, CA 94608",
        "treeCount": "21",
        "treeType": "2 Avocados, 2 Pear, 2 Apples, 2 Oranges, 2 Tangerines, 2 Olives, 3 Elderberries, 2 Pomegranates, 4 Pineapple Guavas, 2 Persimmons, 3 Elderberries, 2 Pomegranates "
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.273113,
          37.845567
        ]
      },
      "properties": {
        "siteNumber": "60",
        "photo": "images/60.jpg",
        "year": "2016",
        "name": "Driver Park",
        "siteType": "Park",
        "address": "6031 Genoa St, Oakland",
        "treeCount": "5",
        "treeType": "2 Plums, 3 Apples"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.1640862,
          37.7591887
        ]
      },
      "properties": {
        "siteNumber": "61",
        "photo": "images/61.jpg",
        "year": "2016",
        "name": "Castlemont H.S. Food Forest and Farm",
        "siteType": "School",
        "address": "8601 MacArthur Blvd",
        "treeCount": "6",
        "treeType": "Avocado, Elderberry, 4 Tangerines"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.1918816,
          37.760975
        ]
      },
      "properties": {
        "siteNumber": "62",
        "photo": "images/62.jpg",
        "year": "2016",
        "name": "CUES + Futures @ Lockwood Elementary",
        "siteType": "School",
        "address": "6701 International Blvd, Oakland, CA 94",
        "treeCount": "8",
        "treeType": "2 Pineapple Guavas, 1 Fig, 2 Persimmon, 2 Tangerines, 3 Apples"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.35351,
          37.97115
        ]
      },
      "properties": {
        "siteNumber": "63",
        "photo": "images/63.jpg",
        "year": "2016",
        "name": "Mindful Life Project @ Lake Elementary",
        "siteType": "School",
        "address": "2700 11th St, San Pablo, CA 94806",
        "treeCount": "17",
        "treeType": "1 Apple, 2 Pears, 1 Asian Pear, 2 Apricots, 2 Avocados, 1 Plum, 2 Oranges, 1 Tangerine, 1 Lemon, 2 Pineapple Guavas, 1 Fig, 1 Persimmon"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.2625023,
          37.8382302
        ]
      },
      "properties": {
        "siteNumber": "64",
        "photo": "images/64.jpg",
        "year": "2016",
        "name": "Temescal Library Food Forest",
        "siteType": "Community Center",
        "address": "5205 Telegraph Ave, Oakland, CA 94609",
        "treeCount": "1",
        "treeType": "Asian Pear"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.1503818,
          37.7537286
        ]
      },
      "properties": {
        "siteNumber": "65",
        "photo": "images/65.jpg",
        "year": "2016",
        "name": "Oakland Zoo",
        "siteType": "Community Center",
        "address": "9777 Golf Links Rd, Oakland, CA 94605",
        "treeCount": "20",
        "treeType": "15 Live Oak, 5 Avocado"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.273113,
          37.845567
        ]
      },
      "properties": {
        "siteNumber": "66",
        "photo": "images/66.jpg",
        "year": "2017",
        "name": "MLK Day @ Driver Plaza",
        "siteType": "Park",
        "address": "6031 Genoa St, Oakland",
        "treeCount": "8",
        "treeType": "8 Pears"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.179065,
          37.7517594
        ]
      },
      "properties": {
        "siteNumber": "67",
        "photo": "images/67.jpg",
        "year": "2017",
        "name": "RISE Community School",
        "siteType": "School",
        "address": "8521 A St, Oakland, CA 94621",
        "treeCount": "13",
        "treeType": "1 Lemon, 2 Tangerines, 2 Pomegranates, 2 Pears, 2 Apples, 2 Pineapple Guavas, 1 Persimmon, 1 Mulberry"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.1503818,
          37.7537286
        ]
      },
      "properties": {
        "siteNumber": "68",
        "photo": "images/68.jpg",
        "year": "2017",
        "name": "Oakland Zoo",
        "siteType": "Community Center",
        "address": "9777 Golf Links Rd",
        "treeCount": "31",
        "treeType": "15 Quercus lobata, 3 Acer rubrum, 3 Cinamom camphora, 5 Cedrus deodara, 2 Apples, 3 Pears"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.1892999,
          37.7349299
        ]
      },
      "properties": {
        "siteNumber": "69",
        "photo": "images/69.jpg",
        "year": "2017",
        "name": "Brookfield Elementary",
        "siteType": "School",
        "address": "401 Jones Ave, Oakland",
        "treeCount": "15",
        "treeType": "2 Apples, 3 Pears, 4 Tangerines, 4 Pomegranates, 2 Lemons"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.1841097,
          37.7773745
        ]
      },
      "properties": {
        "siteNumber": "70",
        "photo": "images/70.jpg",
        "year": "2017",
        "name": "Mills College Community Farm",
        "siteType": "School",
        "address": "5000 MacArthur Blvd, Oakland, CA 94613",
        "treeCount": "23",
        "treeType": "Misc. Fruit Trees - List not available"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.1640862,
          37.7591887
        ]
      },
      "properties": {
        "siteNumber": "71",
        "photo": "images/71.jpg",
        "year": "2017",
        "name": "Castlemont H.S. Farm ",
        "siteType": "School",
        "address": "8601 MacArthur Blvd",
        "treeCount": "16",
        "treeType": "1 Elderberry, 5 Tangerines, 2 Grapefruits, 2 Lemon, 1 Lime, 5 Guavas"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.268202,
          37.842641
        ]
      },
      "properties": {
        "siteNumber": "72",
        "photo": "images/72.jpg",
        "year": "2017",
        "name": "Phat Beets Produce",
        "siteType": "Community Garden",
        "address": "5707 Dover St, Oakland, CA 94609",
        "treeCount": "8",
        "treeType": "2 Plums, 2 Oranges, 2 Apples, 2 Lemons"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.213433,
          37.7797195
        ]
      },
      "properties": {
        "siteNumber": "73",
        "photo": "images/73.jpg",
        "year": "2017",
        "name": "Global Family Elementary",
        "siteType": "School",
        "address": "2035 40th Ave, Oakland, CA 94601",
        "treeCount": "6",
        "treeType": "2 Lemons, 2 Tangerines, 1 Grapefruit, 1 Orange"
      }
    }
    ]
};


//Create My Custom Icon 
var treeIcon = L.icon({
	iconUrl:      'images/treeIcon.png',
	iconSize:     [30, 30],
	iconAnchor:   [15, 15],
	popupAnchor:  [0, -15] 
})

var residencesIcon = L.icon({
	iconUrl:      'images/residences.png',
	iconSize:     [30, 30],
	iconAnchor:   [15, 15],
	popupAnchor:  [0, -15] 
})

var serviceProviderIcon = L.icon({
	iconUrl:      'images/serviceProvider.png',
	iconSize:     [30, 30],
	iconAnchor:   [15, 15],
	popupAnchor:  [0, -15] 
})

var schoolIcon = L.icon({
	iconUrl:      'images/school.png',
	iconSize:     [30, 30],
	iconAnchor:   [15, 15],
	popupAnchor:  [0, -15] 
})

var streetsideIcon = L.icon({
	iconUrl:      'images/streetside.png',
	iconSize:     [30, 30],
	iconAnchor:   [15, 15],
	popupAnchor:  [0, -15] 
})

var parkCommunityGardenIcon = L.icon({
	iconUrl:      'images/parkCommunityGarden.png',
	iconSize:     [30, 30],
	iconAnchor:   [15, 15],
	popupAnchor:  [0, -15] 
})

var communityCenterIcon = L.icon({
	iconUrl:      'images/communityCenter.png',
	iconSize:     [30, 30],
	iconAnchor:   [15, 15],
	popupAnchor:  [0, -15] 
})

var placeOfWorshipIcon = L.icon({
	iconUrl:      'images/placeOfWorship.png',
	iconSize:     [30, 30],
	iconAnchor:   [15, 15],
	popupAnchor:  [0, -15] 
})

// Add the filtered GeoJSON element to our Map
// starbucksPoints.addTo(map)

//Load External geoJSON but don't add to map
// var myJson = $.getJSON('./js/geoJSON.json',function(data){});


var panMarkers = L.geoJson(treePoints, {
			// onEachFeature: function (feature, layer) {
			// }
		});

$(function(){
	residencesTrees = L.geoJson(treePoints,{
		onEachFeature: makeMarkers,
		filter: function (feature, layer) {
			return feature.properties.siteType == "Residences";	
		},
		pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon:residencesIcon});
		}
	}).addTo(map);
});

$(function(){
	providerTrees = L.geoJson(treePoints,{
		onEachFeature: makeMarkers,
		filter: function (feature, layer) {
			return feature.properties.siteType == "Service Provider";	
		},
		pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon:serviceProviderIcon});
		}
	}).addTo(map);
});

$(function(){
	schoolTrees = L.geoJson(treePoints,{
		onEachFeature: makeMarkers,
		filter: function (feature, layer) {
			return feature.properties.siteType == "School";	
		},
		pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon:schoolIcon});
		}
	}).addTo(map);
});

$(function(){
	streetsideTrees = L.geoJson(treePoints,{
		onEachFeature: makeMarkers,
		filter: function (feature, layer) {
			return feature.properties.siteType == "Streetside";	
		},
		pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon:streetsideIcon});
		}
	}).addTo(map);
});

$(function(){
	parkTrees = L.geoJson(treePoints,{
		onEachFeature: makeMarkers,
		filter: function (feature, layer) {
			return feature.properties.siteType == "Park / Community Garden";	
		},
		pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon:parkCommunityGardenIcon});
		}
	}).addTo(map);
});

$(function(){
	communityCenterTrees = L.geoJson(treePoints,{
		onEachFeature: makeMarkers,
		filter: function (feature, layer) {
			return feature.properties.siteType == "Community Center";	
		},
		pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon:communityCenterIcon});
		}
	}).addTo(map);
});

$(function(){
	placeOfWorshipTrees = L.geoJson(treePoints,{
		onEachFeature: makeMarkers,
		filter: function (feature, layer) {
			return feature.properties.siteType == "Place of Worship";	
		},
		pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon:placeOfWorshipIcon});
		}
	}).addTo(map);
});

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