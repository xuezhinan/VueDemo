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
    border-bottom: 1px solid rgba(7,17,27,0.1);
  }
  .tab .tab-item{
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: rgb(77,85,93);
  }
  .router-link-active{
    color: rgb(240,20,20) !important;
  }
</style>
