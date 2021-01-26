export default {
  created() {
    this.$bus.$on('reload', this.reload)
  },
  destroyed() {
    this.$bus.$off('reload', this.reload)
  },
  methods: {
    reload(message) {
      if (message) {
        this.$message({
          message,
          type: 'success'
        })
        this.$parent.getDataList()
      }
    }
  }
}
