document.querySelector('.map__image').classList.add('map__image--hidden')
const map = L.map('map')
const ZOOM = 19;

const MAP_POSITION = {
  lat: 59.968400,
  lng: 30.317523,
};

map.setView(MAP_POSITION, ZOOM);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
  },
).addTo(map);

const pinIcon = L.icon({
  iconUrl: './img/map-marker.svg',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

const marker = L.marker(
  MAP_POSITION,
  {
    icon: pinIcon,
  },
);

marker.addTo(map);
