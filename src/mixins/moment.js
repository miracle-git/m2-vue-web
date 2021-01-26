export default {
  methods: {
    formatDate(date, format = 'YYYY-MM-DD') {
      return date ? this.$moment(date).format(format) : ''
    }
  }
}
