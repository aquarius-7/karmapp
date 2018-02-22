var mymap = L.map('mapid').setView([51.505, -0.09], 10);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoidGVoZmV0YSIsImEiOiJjamR2dTF4cXIwcHZyMnFsYnVhOXJyM3o1In0.qMSaNqcopvlhXq7QcFq9bA', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoidGVoZmV0YSIsImEiOiJjamR2dTF4cXIwcHZyMnFsYnVhOXJyM3o1In0.qMSaNqcopvlhXq7QcFq9bA'
}).addTo(mymap);

function update() {
	var LA = document.getElementById("lat").value;
	var LO = document.getElementById("lon").value;
	mymap.setView([LA, LO], 10);
};

var popup = L.popup();

function onMapClick(e) {
				var marker = L.marker(e.latlng).addTo(mymap);
				var msg = prompt("Enter a message:")
				marker.bindPopup(msg.toString() + " " +  e.latlng.toString());

}

mymap.on('click', onMapClick);