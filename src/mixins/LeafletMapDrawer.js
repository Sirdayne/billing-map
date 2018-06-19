import L from 'leaflet'
import 'leaflet-providers'
import 'leaflet/dist/leaflet.css'

export default {
  data() {
    return {
      leafletMap: null,
      myLatLng: {lat: 51.1605, lng: 71.4704},
    }
  },
  mounted() {
    this.drawMap()
  },
  methods: {
    drawMap() {
      if (this.leafletMap) this.leafletMap.remove()
      this._addLayers()
    },
    _addLayers() {
      let attribution = 'Kazdream Technologies';
      let osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: attribution});
      let satellite = L.
      tileLayer.provider('Esri.WorldImagery', {attribution: attribution});
      let baseLayers = { "Спутник": satellite, "OpenStreetMaps": osm};
      this.leafletMap = L.map('map', {editable: true, layers: [osm]}).setView(this.myLatLng, 15);
      L.control.layers(baseLayers).addTo(this.leafletMap);
    },
  },
}
