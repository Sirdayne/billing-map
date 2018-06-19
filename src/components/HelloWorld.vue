<template>
  <div class="hello">
    <router-link to="billing-map">Billing Map</router-link>
    <img src="@/assets/logo.png">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="search">
    <p v-for="item in paginatedData">{{ item.title }}</p>
    <button @click="prevPage" :disabled="pageNumber === 0">prev</button>
    <button @click="nextPage" :disabled="pageNumber >= pageCount -1">next</button>
  </div>
</template>

<script>
import { EventBus } from '@/services/EventBus'
import http from '@/services/httpQuery'
import paginate from '@/mixins/paginate'

export default {
  name: 'HelloWorld',
  data () {
    return {
      search: '',
      msg: 'Welcome to Your Vue.js App',
      contents: []
    }
  },
  mixins: [
    paginate,
  ],
  computed: {
    entity() {
      let array = this.$store.getters.getEntity
      array = this.search.length > 0 ? array.filter(a => a.title.includes(this.search.toLowerCase())) : array
      return array
    },
    paginatedData(){
      const start = this.pageNumber * this.perPage,
        end = start + this.perPage;
      return this.contents.slice(start, end);
    },
    pageCount(){
      let l = this.contents.length,
        s = this.perPage;
      return Math.floor(l/s);
    }
  },
  created() {
    http.get('posts').then(data => {
      this.$store.dispatch('actionSetEntity', data)
      this.contents = data
    })
    EventBus.$emit('DataChanged', 222)
  },
  methods: {
    nextPage(){
      this.pageNumber++;
    },
    prevPage(){
      this.pageNumber--;
    }
  }
}
</script>

<style scoped>

</style>
