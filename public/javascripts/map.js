mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhbmUwMjIwNzIiLCJhIjoiY2p5aHg0b3YxMDRlODNubWpldmFvYjNuMCJ9.VImPh4Yak9vR2avBEJ2N_Q';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/cjaudgl840gn32rnrepcb9b9g',
  center: [86.922623, 27.986065], //Mt Everest
  zoom: 9,
  doubleClickZoom: false
});

map.on('load', function () {
    map.addSource('dem', {
    "type": "raster-dem",
    "url": "mapbox://mapbox.terrain-rgb"
    });
    map.addLayer({
    "id": "hillshading",
    "source": "dem",
    "type": "hillshade"
    // insert below waterway-river-canal-shadow;
    // where hillshading sits in the Mapbox Outdoors style
    }, 'waterway-river-canal-shadow');
});