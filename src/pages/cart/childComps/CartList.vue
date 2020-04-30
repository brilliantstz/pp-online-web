<template>
    <div id="cart-list">
      <cart-list-item  v-show="cartGoodsList.length !== 0" v-for="item in cartGoodsList" :cart-goods="item"/>

      <div class="show-msg" v-show="cartGoodsList.length === 0">

        亲，您的购物车暂无商品！

      </div>

    </div>



</template>
<script>

    import CartListItem from './CartListItem'

    import {mapGetters} from 'vuex'

    export default {
      name: "CartList",
      components: {
        CartListItem,
      },
      computed: {
        ...mapGetters(['cartGoodsList'])
      },
      created() {
        //console.log(this.cartGoodsList.length === 0)
      }
    }
</script>

<style scoped>


  #cart-list .show-msg {
    text-align: center;

    height: calc(100Vh - 133px) ;
    line-height: calc(100Vh - 133px) ;

  }

</style>
