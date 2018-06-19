<template>
  <div class="hello">
    <router-link to="/">Home</router-link>
    <img src="@/assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>{{ data }}</h2>
  </div>
</template>

<script>
import { EventBus } from '@/services/EventBus'
import http from '@/services/httpQuery'

export default {
  name: 'BillingMap',
  data () {
    return {
      msg: 'Billing Map',
      data: 1
    }
  },
  computed: {
    entity() {
      return this.$store.getters.getEntity
    },
  },
  created() {
    EventBus.$on('DataChanged', entity => {
      this.data = entity
    })
  },
}
</script>

<style scoped>

</style>
