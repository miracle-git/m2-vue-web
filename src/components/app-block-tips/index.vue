<template>
  <div class="app-block-tips">
    <p>{{text}} <span class="desc">{{desc}}</span></p>
  </div>
</template>

<script>
  export default {
    name: 'app-block-tips',
    props: {
      text: {
        type: String,
        required: true
      },
      desc: String
    }
  }
</script>

<style lang="less">
  @import "./index.less";
</style>
