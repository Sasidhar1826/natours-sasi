/* eslint-disable */

export const displayMap = (locations) => {
  var map = L.map('map', {
    scrollWheelZoom: false,
  }); // Remove the initial setView

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  const markerCoordinates = [];

  locations.forEach((loc) => {
    // Add each marker's coordinates to the array
    markerCoordinates.push(loc.coordinates.reverse());

    var myIcon = L.icon({
      iconUrl: '../img/pin.png',
      iconSize: [32 + 15, 40 + 15],
      iconAnchor: [16 + 15, 40 + 15],
      popupAnchor: [-3, -32],
    });

    var marker = L.marker(loc.coordinates, { icon: myIcon }).addTo(map);

    marker.bindPopup(`<b>Day ${loc.day}:</b><br>${loc.description}`);
    marker.openPopup();
  });

  map.fitBounds(markerCoordinates);
};
