// This array has all of New York's zip codes. We'll use it later to check if we're using a valid zip code befoe we make a geocode call to Google
var NyZips = [
  "10001",
  "10451",
  "11201",
  "10029",
  "10155",
  "10007",
  "10301",
  "10031",
  "10312",
  "10060",
  "10465",
  "10111",
  "10475",
  "11101",
  "10128",
  "10155",
  "11204",
  "10169",
  "11213",
  "10271",
  "11221",
  "11103",
  "11351",
  "11236",
  "11361",
  "11357",
  "11372",
  "11368",
  "11369",
  "11370",
  "11414",
  "11371",
  "11415",
  "11372",
  "11416",
  "11373",
  "11417",
  "11374",
  "11418",
  "11375",
  "11419",
  "11377",
  "11420",
  "11378",
  "11421",
  "11379",
  "11422",
  "11385",
  "11423",
  "11411",
  "11426",
  "11412",
  "11427",
];

// Here we establish some global variables we'll be using with the map.
var address = "";
var map;
var infowindow;
// Here we're starting up the map.
// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     // This is info used to display the default location and zoom level.
//     zoom: 14,
//     center: { lat: 41.8781, lng: -87.6298 },
//   });
//   // Here we're starting up our infowindows. Infowindows are the little pop-ups with information that appear when you click a school marker on our map.
//   infowindow = new google.maps.InfoWindow();

//   // Here, we're telling Maps to grab the GEOJSON data from this file and use it to populate school markers on the map.
//   map.data.loadGeoJson(
//     "assets/map_data/Chicago_Public_Schools-School_Locations_SY1415.geojson"
//   );
//   // This is a listener that's looking for clicks on school map points so we can give the user the appropriate infowindow
//   map.data.addListener("click", function (event) {
//     var feat = event.feature;
//     // Here we're setting the text we want to pu in our infowindow.
//     var html =
//       "<b>" +
//       feat.getProperty("school_nm") +
//       "</b><br>" +
//       feat.getProperty("sch_addr");
//     // Next we set the text.
//     infowindow.setContent(html);
//     // These lines specify the position of the infowindow and how it's tip should be positioned.
//     infowindow.setPosition(event.latLng);
//     infowindow.setOptions({ pixelOffset: new google.maps.Size(0, -34) });
//     // This tells the infowindow to open.
//     infowindow.open(map);
//   });

//   // Geocoder is a seperate Maps API. It's what we use to shift the map to a new location based on the zip code the user entered.
//   var geocoder = new google.maps.Geocoder();

//   // Here we've got a listener for the zip code submit button. When the user submits a zip, we feed it to the Geocode api.
//   document.getElementById("submit").addEventListener("click", function () {
//     geocodeAddress(geocoder, map);
//   });
// }

// // This is the function that does the Geocode api call.
// function geocodeAddress(geocoder, resultsMap) {
//   // Before making the call, we check if the zip given is a valid NY zip. If it isn't, we don't make the call.
//   var address = document.getElementById("zipcode").value;
//   if (NyZips.includes(address)) {
//     // The call itself.
//     geocoder.geocode({ address: address }, function (results, status) {
//       if (status === "OK") {
//         resultsMap.setCenter(results[0].geometry.location);
//         // Here we define how the marker for the user's zip should be displayed. We made it different so it won't be confused for a school.
//         var marker = new google.maps.Marker({
//           map: resultsMap,
//           position: results[0].geometry.location,
//           icon: {
//             path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
//             scale: 5,
//             fillColor: "blue",
//             fillOpacity: 1,
//             strokeColor: "blue",
//             strokeWeight: 5,
//           },
//         });
//       }
//       // This bit of code has the page auto-scroll from the zip entry form to the map. It's not google map related!
//       $("html,body").animate(
//         {
//           scrollTop: $("#map").offset().top,
//         },
//         "slow"
//       );
//     });
//   }
// }
("use strict");
Object.defineProperty(exports, "__esModule", { value: true });
var map, infoWindow;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 6,
  });
  infoWindow = new google.maps.InfoWindow();
  var locationButton = document.createElement("button");
  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", function () {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        function () {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}
window.initMap = initMap;
