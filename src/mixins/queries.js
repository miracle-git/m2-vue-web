export default {
  data() {
    return {
      queryTypes: {}
    }
  },
  created() {
    Object.keys(this.queryTypes).map(key => {
      const item = this.queryTypes[key]
      item.params = { ...this.getSearchParams(item), current: item.pager.current, size: item.pager.size }
      item.auto && item.list && item.list.query()
      this.$bus.$on(item.list.event || 'query', pager => this.getPageDataList(item, pager))
      this.$bus.$on(item.pager.event || 'pager-change', pager => this.getPageDataList(item, pager))
    })
  },
  methods: {
    getSearchParams(item) {
      return {
        condition: {
          where: (() => Object.entries(item.form).reduce((res, [key, val]) => [...res, { column: key, type: item.likes.includes(key) ? 'like' : '=', value: val }], []))(),
          orderby: item.orderby
        }
      }
    },
    getPageDataList(item, pager) {
      item.pager.current = pager.pageIndex
      item.pager.size = pager.pageSize
      item.params = { ...item.params, ...pager }
      item.list.query()
    }
  },
  destroyed() {
    Object.keys(this.queryTypes).map(key => {
      const item = this.queryTypes[key]
      this.$bus.$off(item.list.event || 'query')
      this.$bus.$off(item.pager.event || 'query')
    })
  }
}
