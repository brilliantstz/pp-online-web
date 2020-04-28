<template>
  <div id="order">
    <order-nav-bar/>


    <tab-control
      class="tab-control"
      :titles="['全部订单', '已付款', '未付款', '待评价']"
      @tabClick="tabClick"
      ref="tabControl"/>

    <scroll class="content" ref="scroll"
            :probe-type="3"
            :pullUpLoad="true"
            @scroll="contentScroll" >

      <order-list :order-list="orderList"/>

    </scroll>

    <back-top class="back-top" @click.native="backTopClick" v-show="isShowBackTop" />

  </div>
</template>

<script>

  import OrderNavBar from './childComps/OrderNavBar'
  import TabControl from 'components/content/tabControl/TabControl'

  import Scroll from 'components/common/scroll/Scroll'
  import OrderList from './childComps/OrderList'

  import BackTop from 'components/content/backTop/BackTop'

  export default {
    name: "Order",
    components: {
      OrderNavBar,
      TabControl,

      Scroll,
      OrderList,

      BackTop
    },
    data() {
      return {
        orderList: [],
        isShowBackTop: false
      }
    },
    methods: {
      contentScroll(position) {
        //console.log(position);
        // 判断是否显示backTop
        this.isShowBackTop = (-position.y) > 600
      },
      backTopClick() {
        //console.log('backTopClick');
        this.$refs.scroll.scrollTo(0, 0)
      },

      tabClick(index) {
        console.log(index)
      }
    }
  }
</script>

<style scoped>

  #order {
    height: 100vh;

    position: relative;
  }

  .tab-control {
    position: fixed;

    top: 44px;
    left: 0;
    right: 0;

  }

  .content {
    position: absolute;

    overflow: hidden;
    background-color: #fff;

    top: 84px;
    bottom: 0;
    left: 0;
    right: 0;

    z-index: 1;

  }

  .back-top {
    position: fixed;

    bottom: 5px;
    right: 5px;

    z-index: 2;
  }


</style>
