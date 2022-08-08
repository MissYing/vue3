<template>
  <div class="index">
    <el-button type="primary" @click="clickHandle">index</el-button>
    <div>我是个展示文字</div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    clickHandle (e) {
      console.log(e.target)
    }
  }
}
</script>
<style lang="scss">
  .index {
    color: #f00;
  }
</style>