<template>
  <div class="hello">
    <router-link to="billing-map">Billing Map</router-link>
    <button @click="addMarker">add marker</button>
    <button @click="removeMarkers">remove marker</button>
    <button @click="changeContent('CONTENT CHANGED')">change tooltip</button>
    <div id="map"></div>
    <img src="@/assets/logo.png">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="search">
    <p v-for="item in contents" :key="item.id">{{ item.title }}</p>
    <button @click="prevPage" :disabled="pageNumber === 0">prev</button>
    <button @click="nextPage" :disabled="pageNumber >= pageCount -1">next</button>
  </div>
</template>

<script>
import { EventBus } from '@/services/EventBus'
import http from '@/services/httpQuery'
import GlobalMethods from '@/mixins/GlobalMethods'
import GoogleMapDrawer from '@/mixins/GoogleMapDrawer'

export default {
  name: 'HelloWorld',
  data () {
    return {
      search: '',
      msg: 'Welcome to Your Vue.js App',
      contents: [],
    }
  },
  mixins: [
    GlobalMethods,
    GoogleMapDrawer
  ],
  computed: {
    entity() {
      let array = this.$store.getters.getEntity
      array = this.search.length > 0 ? array.filter(a => a.title.includes(this.search.toLowerCase())) : array
      return array
    },
  },
  created() {
    http.get('posts').then(data => {
      this.$store.dispatch('actionSetEntity', data)
      this.contents = data
    })
    EventBus.$emit('DataChanged', 222)
  },
  methods: {

  }
}
</script>

<style scoped>
#map{
  width: 100%;
  height: 500px;
}
</style>
