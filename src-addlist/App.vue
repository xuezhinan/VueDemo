<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <!--将方法传递给组件Add-->
      <Add :addComm="addComm"/>
      <!--将暴露的数据comments传递给组件List-->
      <List :comments="comments" :deleteComm="deleteComm"/>
    </div>
  </div>
</template>

<script>
  import Add from "./commponts/Add.vue"
  import List from './commponts/List.vue'

  export default {
    name: 'App',
    components:{
      Add,List
    },
    methods:{
      addComm(comment){
        this.comments.unshift(comment);
      },
      deleteComm(index){
        this.comments.splice(index,1);
      }
    },
    data(){
      return {
        comments:[
          {name:"A",content:"Vue不好学"},
          {name:"B",content:"Vue好学  很简单"},{name:"C",content:"Vue比react好用好学"},{name:"我",content:"这些我都会"}]
      }
    }
  }
</script>

<style scoped>

</style>
