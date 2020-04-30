<template>
  <div>
    <input type="text" v-model="val" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: '请输入内容'
    }
  },
  created() {
    console.log(this.$route.query)
    console.log(this.$route.params)
    console.log('create' + this.val)
  },
  mounted() {
    console.log('mounted' + this.val)
  },
  updated() {
    console.log('updated' + this.val)
  }
}
</script>

<style>
</style>