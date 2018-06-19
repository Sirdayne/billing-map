export default {
  data () {
    return {
      pageNumber: 0,
      perPage: 5,
    }
  },
  computed: {
    paginatedData(){
      const start = this.pageNumber * this.perPage
      const end = start + this.perPage;
      return this.contents.slice(start, end);
    },
    pageCount(){
      return Math.floor(this.contents.length / this.perPage);
    }
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
