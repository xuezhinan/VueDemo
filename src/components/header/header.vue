<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img height="64" width="64" :src="seller.avatar" alt="">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          <span>{{seller.description}}/{{seller.deliveryTime}}分钟送达</span>
        </div>
        <div v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="support-content" @click="showDetails()">
        <span class="count" v-if="seller.supports">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetails()">
      <span class="bulletin-title"></span><span class="bulletin-text" v-if="seller.bulletin">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" alt="">
    </div>
    <transition name="fade">
      <div class="detail" v-show="showDetail">
        <div class="detail-wrapper">
          <div class="detail-main clearfix">
            <h1 class="name">{{seller.name}}</h1>
            <div class="star-wrapper">
              <star :score="seller.score" :size="48"></star>
            </div>
            <div class="title">
              <div class="line"></div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div>
            <div v-if="seller.supports"  class="support">
              <div class="support-item" v-for="(support,index) in seller.supports">
                <span class="icon" :class="classMap[seller.supports[index].type]"></span>
                <span class="text">{{seller.supports[index].description}}</span>
              </div>
            </div>
            <div></div>
            <div class="title">
              <div class="line"></div>
              <div class="text">商家公告</div>
              <div class="line"></div>
            </div>
            <div class="bulletin">
              <p>{{seller.bulletin}}</p>
            </div>
          </div>
        </div>
        <div class="detail-close" @click="closeDetaile()">
          <i class="icon-close" @click="closeDetaile()"></i>
        </div>
      </div>
    </transition>

  </div>
</template>

<script type="text/ecmascript-6">
  import star from  '../star/star'

  export default {
    name: 'header',
    props: {
      seller: Object
    },
    methods:{
      showDetails() {
        this.showDetail = true;
      },
      closeDetaile(){
        this.showDetail = false;
      }
    },
    data() {
      return {
        classMap : ["decrease","discount","special","invoice","guarantee"],
        showDetail : false
      }
    },
    components:{
      /*注册引用过来的组件*/
      star
    }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl";
  .header
    color: #fff
    background-color rgba(7,17,27,0.5)
    position relative
    overflow hidden
    .content-wrapper
      position relative
      padding : 24px 12px 18px 24px
      font-size 0
      .avatar
        display inline-block
        img
          border-radius 2px
      .content
        font-size 14px
        display :inline-block
        margin-left 16px
        vertical-align top
        .title
          margin 2px 0px 8px 0px
          .brand
            display inline-block
            width 30px
            height 18px
            bg-imag(brand)
            background-size 30px 18px
            background-repeat no-repeat
            vertical-align top
          .name
            margin-left 6px
            font-size 16px
            line-height 18px
            font-weight bold
        .description
          font-size 12px
          line-height 12px
          font-weight 200
          margin-bottom 10px
        .support
          .icon
            display inline-block
            width 12px
            height 12px
            background-size 12px 12px
            margin-right 4px
            background-repeat no-repeat
            &.decrease
              bg-imag("decrease_1")
            &.discount
              bg-imag("discount_1")
            &.guarantee
              bg-imag("guarantee_1")
            &.special
              bg-imag("special_1")
            &.invoice
              bg-imag("invoice_1")
          .text
            font-size 10px
            line-height 12px
            font-weight 200
            vertical-align top



      .support-content
        position absolute
        padding 0 8px
        right 12px
        height 24px
        bottom 14px
        line-height 24px
        background rgba(0,0,0,0.2)
        border-radius 14px
        .count
          font-size 10px
          vertical-align top
        .icon-keyboard_arrow_right
          font-size 10px
          margin-left 2px
          line-height 24px


    .bulletin-wrapper
      height 28px
      padding 0 22px 0 12px
      line-height 28px
      background-color rgba(7,17,27,0.2)
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
      position relative
      .bulletin-title
        margin-right 4px
        display inline-block
        height 12px
        width 22px
        bg-imag("bulletin")
        background-size 22px 12px
        background-repeat no-repeat
        font-size 12px
      .bulletin-text
        font-size 10px
        vertical-align top
      .icon-keyboard_arrow_right
        position absolute
        font-size 10px
        line-height 28px
        right 10px

    .background
      img
        height 100%
        width 100%
        position absolute
        top 0
        left 0
        filter blur(10px)
        z-index -1
    .detail
      position fixed
      height 100%
      width 100%
      top 0
      left 0
      z-index 100
      overflow auto
      background-color rgba(7,17,27,0.9)
      .detail-wrapper
        min-height 100%
        .detail-main
          margin-top 64px
          padding-bottom 64px
          width 100%
          .name
            font-size 16px
            font-weight 700
            line-height 16px
            text-align center
          .star-wrapper
            margin-top 16px
            text-align center
            padding 2px 0
          .title
            display flex
            width 80%
            margin 28px auto 24px auto
            .line
              flex 1
              position relative
              border-bottom 1px solid rgba(225,225,225,0.2)
              top -6px
            .text
              padding 0 12px
              font-size 14px
              font-weight 700
          .support
            width 80%
            margin 0 auto
            text-align left
            .support-item
              margin-bottom 12px
              padding 0 12px
              font-size 0
              &:last-child
                margin-bottom 0
              .icon
                display inline-block
                width 16px
                height 16px
                vertical-align top
                margin-right 6px
                background-size 16px 16px
                background-repeat no-repeat
                &.decrease
                  bg-imag("decrease_2")
                &.discount
                  bg-imag("discount_2")
                &.guarantee
                  bg-imag("guarantee_2")
                &.special
                  bg-imag("special_2")
                &.invoice
                  bg-imag("invoice_2")
              .text
                font-weight 200
                line-height 16px
                font-size 12px

          .bulletin
            width 80%
            margin 0 auto
            p
              font-size 12px
              font-weight 200
              line-height 24px
              padding 0 12px
      .detail-close
        position relative
        width 32px
        height 32px
        font-size 32px
        margin -64px auto 0 auto
        clear both

</style>
