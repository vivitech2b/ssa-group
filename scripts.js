// Exemple de géolocalisation des stations sur une carte (Leaflet.js)
document.addEventListener("DOMContentLoaded", function() {
  var map = L.map('map').setView([45.9, 6.1], 10);  // Position par défaut (Alpes)

  // Ajouter le fond de carte
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Exemple de marker pour une station
  L.marker([45.7, 6.2]).addTo(map)
    .bindPopup('<b>Station Savoie Carburants</b><br>Carburants et services 24/7')
    .openPopup();
});
