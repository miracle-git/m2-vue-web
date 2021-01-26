export default {
  data() {
    return {
      auto: true,
      queryEvent: 'query',
      likes: [],
      orderby: [],
      form: {},
      pager: {
        total: 0,
        current: 1,
        size: 10,
        event: 'pager-change'
      }
    }
  },
  computed: {
    search() {
      return {
        condition: {
          where: (() => Object.entries(this.form).reduce((res, [key, val]) => [...res, { column: key, type: this.likes.includes(key) ? 'like' : '=', value: val }], []))(),
          orderby: this.orderby
        }
      }
    },
    params() {
      return { ...this.search, current: this.pager.current, size: this.pager.size }
    }
  },
  created() {
    this.auto && this.getDataList()
    this.$bus.$on(this.queryEvent, this.getPageDataList)
    this.$bus.$on(this.pager.event || this.pagerEvent, this.getPageDataList)
  },
  methods: {
    getPageDataList(pager) {
      this.pager.current = pager.pageIndex
      this.pager.size = pager.pageSize
      this.getDataList()
    },
    handleReset(formName = 'form') {
      this.$refs[formName].resetFields()
    }
  },
  destroyed() {
    this.$bus.$off(this.queryEvent, this.getPageDataList)
    this.$bus.$off(this.pager.event || this.pagerEvent, this.getPageDataList)
  }
}
