<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import '@/assets/reset.css'

import http from '@/services/httpQuery'
import { EventBus } from '@/services/EventBus'

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
