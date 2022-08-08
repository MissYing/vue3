<template>
  <div class="demo">
    111666
    <el-button type="primary" @click="clickHandle">demo</el-button>
  </div>
</template>

<script>
export default {
  name: 'demo',
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