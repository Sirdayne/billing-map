<template>
  <div class="hello">
    <router-link to="billing-map">Billing Map</router-link>
    <img src="@/assets/logo.png">
    <h1>{{ msg }}</h1>
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
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    entity() {
      return this.$store.getters.getEntity
    },
  },
  created() {
    http.get('posts').then(data => {
      this.$store.dispatch('actionSetEntity', data)
      EventBus.$emit('EntityChanged', 222)
    })
  },
}
</script>

<style scoped>

</style>
