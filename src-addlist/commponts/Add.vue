<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input type="text" class="form-control" placeholder="用户名" v-model="name">
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea class="form-control" rows="6" placeholder="评论内容" v-model="content"></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-default pull-right" @click="sub">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Add',
    props:{
      addComm:{
        type:Function,
        required:true
      }
    },
    methods:{
      sub(){
        const name = this.name.trim();
        const content = this.content.trim();
        if (!name || !content) {
          alert("名字和内容不能为空！");
          return
        }
        const comment = {
          name,content
        }
        this.addComm(comment);
        this.name ="";
        this.content ="";

      }
    },
    data(){
      return {
        name:"",
        content:""
      }
    }
  }
</script>

<style scoped>

</style>
