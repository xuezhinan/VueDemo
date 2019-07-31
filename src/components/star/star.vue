<template>
  <div class="star" :class="starType">
    <!--遍历循环拼接星星-->
    <span v-for="itemClass in itemClasses" :class="itemClass" class="star-item"></span>
  </div>
</template>

<script>
  const CLS_ON = "on";
  const CLS_OFF = "off";
  const CLS_HALF = "half";
  const STAR_NUM = 5;
  export default {
    name: 'star',
    props: {
      /*接收传过来的数据，用来计算星星的个数*/
      size: {
        type : Number
      },
      score: {
        type: Number
      }
    },
    computed:{
      /*计算属性*/
      starType() {
        return "star-" + this.size;
      },
      itemClasses() {
        let result = [];
        let score = Math.floor(this.score * 2) / 2;
        let hasDecimal = score % 1 !== 0;//是否有小数
        let onLen = Math.floor(score);
        for (let i = 0; i < onLen; i++){
          result.push(CLS_ON);
        }
        if (hasDecimal) {
          result.push(CLS_HALF);
        }
        while (result.length < STAR_NUM){
          result.push(CLS_OFF);
        }
        return result;
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/mixin.styl"
  .star
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right 0
        &.on
          bg-imag("star48_on")
        &.off
          bg-imag("star48_off")
        &.half
          bg-imag("star48_half")
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 12px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-imag("star36_on")
        &.off
          bg-imag("star36_off")
        &.half
          bg-imag("star36_half")
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-imag("star24_on")
        &.off
          bg-imag("star24_off")
        &.half
          bg-imag("star24_half")

</style>
