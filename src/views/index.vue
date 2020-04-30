<template class="containt">
  <div>
    <span>刘冬</span>
    <router-link :to="{path:'/child1/add?sum='+sum,query:{id:10,name:'liudong1'}}">子页面1</router-link>
    <router-link :to="{name:'child2',params:{id:20,name:'liudong2'}}">页面2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'liudong',
  data() {
    return {
      add: 'luoshan',
      sum: 40
    }
  },
  methods: {
      
    show() {
      console.log('刘冬')
    }
  }
}
</script>

<style>
</style>
