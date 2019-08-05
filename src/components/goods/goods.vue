<template>
  <div class="goods">
    <div v-if="goods" class="menu-wrapper">
      <!--<ul >
        <li v-for="(item,index) in goods" class="menu-item" :class="{'current':currentIndex === index}" @click="selectMenu(index,$event)">
          <span class="text"><span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}</span>
        </li>
      </ul>-->
      <table>
        <tr v-for="(item,index) in goods" class="menu-item" :class="{'current':currentIndex === index}" @click="selectMenu(index,$event)">
          <span class="text"><span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}</span>
        </tr>
      </table>
    </div>
    <div class="foods-wrapper">
      <ul>
        <li v-for="(item,index) in goods" class="food-list-hook" >
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li v-for="food in item.foods" class="food-item ">
              <div class="icon ">
                <img :src="food.icon" width="57" height="57" alt="">
              </div>
              <div class="content ">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="sellCount">月售{{food.sellCount}}份</span>
                  <span class="rating">好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="nowPrice">￥<span>{{food.price}}</span></span>
                  <span v-show="food.oldPrice" class="oldPrice">￥<span>{{food.oldPrice}}</span></span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  export default {
    name: 'goods',
    data(){
      return {
        classMap : ["decrease","discount","special","invoice","guarantee"],
        goods: [],
        listHeight: [],
        scrollY: 0
      }
    },
    created() {
      this.$http.get("/api/goods").then((response) => {
        response = response.body;
        if (response.msgFlag == 0) {
          this.goods = response.data;
          this.$nextTick(() => {
            this._initBScroll();
            this._calculateHeight();
          })
        }
      });
    },
    computed: {
      currentIndex() {
        for (let i = 0; i < this.listHeight.length; i++) {
          let height1 = this.listHeight[i];
          let height2 = this.listHeight[i+1];
          if (!height2 || (this.scrollY >= height1 && this.scrollY < height2) ) {
            return i;
          }
        }
        return 0;
      }
    },
    methods: {
      selectMenu(index ,event) {
        let foodList = document.getElementsByClassName("food-list-hook");
        let el = foodList[index];
        this.foodScroll.scrollToElement(el, 300);
      },
      _initBScroll() {
        this.menuScroll = new BScroll(".menu-wrapper",{
          click: true
        });
        this.foodScroll = new BScroll(".foods-wrapper",{
          probeType: 3
        });
        //监听div滚动事件
        this.foodScroll.on("scroll", (position) => {
          this.scrollY = Math.abs(Math.round(position.y));
          let menuList = document.getElementsByClassName("menu-item");
          let mEl = menuList[this.currentIndex];
          this.menuScroll.scrollToElement(mEl,300);
        });
        //监听touch结束事件，也就是下拉松手的那个时间的事件
        this.foodScroll.on("touchEnd",(pos) => {
          if (pos.y > 30){
            //模拟加载更多
            console.log("下拉刷新");
            //页面加载数据刷新后要重新刷新foodScroll计算高度；
            this.foodScroll.refresh();
          }else {
            this.foodScroll.refresh();
          }
        });
      },
      _calculateHeight() {
        let foodList = document.getElementsByClassName("food-list-hook");
        let height = 0;
        this.listHeight.push(height);
        for (let i = 0; i < foodList.length ; i++){
          let item = foodList[i];
          height += item.clientHeight;
          this.listHeight.push(height);
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .goods
    display flex
    width 100%
    position absolute
    top 174px
    bottom 46px
    overflow hidden
    .menu-wrapper
      flex 0 0 80px
      width 80px
      background-color #f3f5f7
      .menu-item
        font-size 12px
        color rgb(77,85,93)
        line-height 14px
        height 54px
        width 56px
        cellpadding 0 12px
        border-bottom 1px solid rgba(7,17,27,0.1)
        &.current
          font-weight 700
          background-color white
          z-index 10
          margin-top -1px
          border-bottom none
        .text
          display table-cell
          vertical-align middle
          text-align center
          .icon
            display inline-block
            width 12px
            height 12px
            background-size 12px 12px
            margin-right 4px
            background-repeat no-repeat
            &.decrease
              bg-imag("decrease_3")
            &.discount
              bg-imag("discount_3")
            &.guarantee
              bg-imag("guarantee_3")
            &.special
              bg-imag("special_3")
            &.invoice
              bg-imag("invoice_3")
    .foods-wrapper
      flex 1
      .title
        height 26px
        font-size 12px
        line-height 26px
        color rgb(147,153,159)
        padding-left 13px
        border-left 2px solid #d9dde1
        background-color #f3f5f7
      .food-item
        display flex
        margin 18px
        padding-bottom 16px
        border-bottom 1px solid rgba(7,17,27,0.1)
        &:last-child
          border-bottom none
          margin-bottom 0
        .icon
          flex 0 0 57px
          margin-right  10px
        .content
          flex 1
          .name
            font-size 14px
            line-height 14px
            color rgb(7,17,27)
            font-weight 700
            margin-bottom 8px
            margin-top 2px
          .desc
            color rgb(147,153,159)
            font-size 10px
            line-height 13px
            margin-bottom 8px
          .extra
            color rgb(147,153,159)
            font-size 0
            line-height 10px
            .sellCount
              font-size 10px
              line-height 10px
              margin-right 12px
            .rating
              font-size 10px
              line-height 10px
          .price
            .nowPrice
              font-size 10px
              color rgb(240,20,20)
              font-weight normal
              line-height 24px
              margin-right 8px
              & > span
                font-size 14px
                font-weight 700
          .oldPrice
            text-decoration line-through
            font-size 10px
            color rgb(147,153,159)
            line-height 24px
            font-weight normal
            & > span
              font-weight 700

</style>
