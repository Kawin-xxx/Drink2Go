document.querySelector(".map__image").classList.add("map__image--hidden");const map=L.map("map"),ZOOM=19,MAP_POSITION={lat:59.9684,lng:30.317523};map.setView(MAP_POSITION,19),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>'}).addTo(map);const pinIcon=L.icon({iconUrl:"img/map-marker.svg",iconSize:[38,50],iconAnchor:[19,50]}),marker=L.marker(MAP_POSITION,{icon:pinIcon});marker.addTo(map);