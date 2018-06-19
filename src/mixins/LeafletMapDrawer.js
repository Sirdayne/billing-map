import L from 'leaflet'
import 'leaflet-providers'
import 'leaflet/dist/leaflet.css'

export default {
  data() {
    return {
      leafMap: null,
      leafLatLng: {lat: 51.1605, lng: 71.4704},
      leafMarkers: new L.FeatureGroup(),
    }
  },
  mounted() {
    this.drawMap()
  },
  methods: {
    drawMap() {
      if (this.leafMap) this.leafMap.remove()
      this._addLayers()
      this._addMarker()
      //this._addTooltips()
      this._addPopups()
    },
    _addLayers() {
      let attribution = 'Kazdream Technologies'
      let osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: attribution})
      let satellite = L.tileLayer.provider('Esri.WorldImagery', {attribution: attribution})
      let baseLayers = { "Спутник": satellite, "OpenStreetMaps": osm}
      this.leafMap = L.map('map', {editable: true, layers: [osm]}).setView(this.leafLatLng, 15)
      L.control.layers(baseLayers).addTo(this.leafMap)
    },
    _addMarker() {
      let customIcon = L.icon({iconUrl: require('@/assets/marker.png'), iconSize: [32, 32], iconAnchor: [15, 25], popupAnchor: [0, -16]})
      let marker = L.marker([51.1605, 71.4704], {icon: customIcon}).addTo(this.leafMap)
      marker.label = 'Kazakhstan<br/> Astana <br/> bridge!'
      this.leafMarkers.addLayer(marker)
      this.leafMap.addLayer(this.leafMarkers)
    },
    _addTooltips() {
      this.leafMarkers.eachLayer(marker => {
        marker.bindTooltip(marker.label, {
          permanent: false,
          direction: "center",
          opacity: 1,
          className: 'tooltip-transparent'
        })
      })
    },
    _addPopups() {
      this.leafMarkers.eachLayer(marker => {
        marker.bindPopup(marker.label)
      })
    }
  },
}
