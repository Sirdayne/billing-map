export default {
  data () {
    return {
      pageNumber: 0,
      perPage: 5,
    }
  },
  computed: {
    pageCount() {
      return Math.floor(this.contents.length / this.perPage);
    }
  },
  methods: {
    nextPage(array) {
      this.pageNumber++;
      this.paginate(array)
    },
    prevPage(array) {
      this.pageNumber--;
      this.paginate(array)
    },
    paginate(arr) {
      const start = this.pageNumber * this.perPage
      const end = start + this.perPage
      return arr.slice(start, end)
    }
  }
}
