<template>
  <div id="cart">

    <nav-bar class="cart-nav">
      <div slot="center">购物车({{cartGoodsListLength}})</div>
    </nav-bar>

    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            :pullUpLoad="true">

      <cart-list/>

    </scroll>

    <cart-bottom-bar/>

  </div>
</template>

<script>

    import NavBar from 'components/common/navbar/NavBar'
    import CartList from './childComps/CartList'
    import CartBottomBar from './childComps/CartBottomBar'

    import Scroll from 'components/common/scroll/Scroll'

    import {mapGetters} from 'vuex'

    export default {
      name: "Cart",
      components: {
        NavBar,
        CartList,
        CartBottomBar,

        Scroll
      },
      computed: {
        ...mapGetters(['cartGoodsListLength'])
      },
    }
</script>

<style scoped>

  #cart {
    height: 100vh;
    position: relative;
  }

  .cart-nav {
    background-color: var(--color-tint);
    color: #fff;
  }

  .content {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 89px;
    left: 0;
    right: 0;
  }


</style>
