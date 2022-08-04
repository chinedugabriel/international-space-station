// this Api was gotten from https://leafletjs.com/

var map = L.map('issMap').setView([0, 0], 1);//this is a map object .setView([latitude, longitude], zoomLevel)

var myIcon = L.icon({//making a maker with a custom icon
    iconUrl: 'spaceX.png',
    iconSize: [38, 75],
    iconAnchor: [22, 94],

});

const marker = L.marker([0, 0], {icon: myIcon}).addTo(map);

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '© OpenStreetMap'
// }).addTo(map);

// this specifies the tiles which represent the map images that's displayed
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const tiles = L.tileLayer(tileUrl, {attribution});
tiles.addTo(map);

// got the divs that displays the longitude(long) and latitude(Lat)
const long = document.getElementById("long");
const lat = document.getElementById("lat");

// API URL
let url = "https://api.wheretheiss.at/v1/satellites/25544";

let firstTime = true;

let getISS = async ()=>{// this function gets the data and converts it into a useable and readable data
    let response = await fetch(url);
    let data = await response.json();
    const {latitude, longitude} = data; // deconstruction
    // console.log(latitude, longitude); 
    // the code below shows the result(latitude, longitude) in the dom
    long.innerHTML = longitude.toFixed(2) + " long";
    lat.innerHTML = latitude.toFixed(2) +" lat";

    // L.marker([50.5, 30.5]).addTo(map);
    map.setView([latitude, longitude], 1.5);
    marker.setLatLng([latitude, longitude]);


};

// calls the function
// getISS();
setInterval(getISS,1000);

