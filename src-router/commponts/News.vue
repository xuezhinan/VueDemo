<template>
  <ul>
    <li v-for="(item,index) in newsArr" :key="index">{{item}}</li>
  </ul>
</template>

<script>
  export default {
    name: 'News',
    data(){
      return {
        newsArr: ['news1','news2','news3','news4']
      }
    }
  }
</script>

<style scoped>

</style>
