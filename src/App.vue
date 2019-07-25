<template>
  <div id="body">
    <Header></Header>
    <div class="tab">
      <router-link to="/goods" class="tab-item">商品</router-link>
      <router-link to="/rating" class="tab-item">评价</router-link>
      <router-link to="/seller" class="tab-item">商家</router-link>

    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Header from "./components/header/header.vue"
  export default {
    name: 'App',
    components:{
      Header
    }
  }
</script>

<style scoped>
  #body .tab{
    height: 40px;
    line-height: 40px;
    width: 100%;
    display: flex;
  }
  .tab .tab-item{
    flex: 1;
    text-align: center;
  }
</style>
