<template>
  <div class="hello">
    <router-link to="/">Home</router-link>
    <img src="@/assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>{{ newEntity }}</h2>
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
      newEntity: 1
    }
  },
  computed: {
    entity() {
      return this.$store.getters.getEntity
    },
  },
  created() {
    console.log(this.newEntity, 'created')
    EventBus.$on('EntityChanged', (entity) => {
      this.newEntity = entity
      console.log(this.newEntity, 'changed')
    })
  },
}
</script>

<style scoped>

</style>
