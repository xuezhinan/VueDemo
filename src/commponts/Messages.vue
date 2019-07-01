<template>
   <div>
     <ul>
       <li v-for="(item,index) in messages" :key="item.id">{{item.title}}</li>
     </ul>
   </div>
</template>

<script>
  export default {
    name: 'Messages',
    data(){
      return{
        messages:[]
      }
    },
    mounted(){
     setTimeout(()=>{
       const messages = [
         {id: 1, title: 'Message001'},
         {id: 3, title: 'Message003'},
         {id: 5, title: 'Message005'}
       ];
       this.messages = messages;
     },1000);
    }
  }
</script>

<style scoped>

</style>
