<template>
  <div id="order-list">
    <order-list-item v-show="orderList.length !== 0 " v-for="item in orderList" :order="item"/>

    <div class="show-msg" v-show="orderList.length === 0">

      亲，暂无订单信息

    </div>

  </div>
</template>

<script>

  import OrderListItem from './OrderListItem'

  export default {
    name: "OrderList",
    components: {
      OrderListItem
    },
    props: {
      orderList: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>

  #order-list .show-msg {
    text-align: center;

    height: calc(100Vh - 84px) ;
    line-height: calc(100Vh - 84px) ;
  }

</style>
