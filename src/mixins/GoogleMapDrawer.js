export default {
  data() {
    return {
      myLatLng: {lat: 51.1605, lng: 71.4704},
      marker: null,
      map: null,
      content: `<div><h2>Astana</h2></div>`,
      infoWindow: null,
    }
  },
  mounted() {
    this.initMap()
    this.addMarkers()
  },
  methods: {
    initMap() {
      const mapOptions = {
          zoom: 14,
          center: this.myLatLng
      }
      this.map = new google.maps.Map(document.getElementById("map"), mapOptions)
    },
    addMarkers() {
      this.marker = new google.maps.Marker({
        position: this.myLatLng,
        title: 'Astana!'
      })

      this.infowindow = new google.maps.InfoWindow({
        content: this.content
      })

      this.marker.addListener('click', () => {
        this.infowindow.open(this.map, this.marker);
      })
    },
    addMarker() {
      this.marker.setMap(this.map)
    },
    removeMarkers() {
      this.marker.setMap(null)
    },
    changeContent(content) {
      this.infowindow.close()
      this.content = `<div><h2>${content}</h2></div>`

      this.infowindow = new google.maps.InfoWindow({
        content: this.content
      })

      this.marker.addListener('click', () => {
        this.infowindow.open(this.map, this.marker);
      })
    }
  },
}
