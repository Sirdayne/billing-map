<template>
  <div class="hello">
    <router-link to="billing-map">Billing Map</router-link>
    <img src="@/assets/logo.png">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="search">
    <p v-for="item in entity">{{ item.title }}</p>
  </div>
</template>

<script>
import { EventBus } from '@/services/EventBus'
import http from '@/services/httpQuery'

export default {
  name: 'HelloWorld',
  data () {
    return {
      search: '',
      msg: 'Welcome to Your Vue.js App'
    }
  },
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
    })
    EventBus.$emit('DataChanged', 222)
  },
}
</script>

<style scoped>

</style>
