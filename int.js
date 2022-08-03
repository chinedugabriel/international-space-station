// var map = L.map('map').setView([51.505, -0.09], 13);

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '© OpenStreetMap'
// }).addTo(map);

const long = document.getElementById("long");
const lat = document.getElementById("lat");

let url = "https://api.wheretheiss.at/v1/satellites/25544";

let getISS = async ()=>{
    let response = await fetch(url);
    let data = await response.json();
    const {latitude, longitude} = data;
    console.log(latitude, longitude);
    // the code below shows the result(latitude, longitude) in the dom
    long.innerHTML = longitude + " long";
    lat.innerHTML = latitude +" lat";

};


getISS();


