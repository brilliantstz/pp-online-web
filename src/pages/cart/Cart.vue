<template>
  <div id="cart">

    <nav-bar class="cart-nav">
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center">购物车({{cartGoodsListLength}})</div>
      <div slot="right" @click="rightClick" v-if="!rightStatus">管理</div>
      <div slot="right" @click="rightClick" v-if="rightStatus">完成</div>
    </nav-bar>

    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            :pullUpLoad="true">

      <cart-list/>

    </scroll>

    <cart-bottom-calculate-bar v-if="!rightStatus"/>
    <cart-bottom-remove-bar v-if="rightStatus"/>

  </div>
</template>

<script>

    import NavBar from 'components/common/navbar/NavBar'
    import CartList from './childComps/CartList'
    import CartBottomCalculateBar from './childComps/CartBottomCalculateBar'
    import CartBottomRemoveBar from './childComps/CartBottomRemoveBar'

    import Scroll from 'components/common/scroll/Scroll'

    import {mapGetters} from 'vuex'

    export default {
      name: "Cart",
      components: {
        NavBar,
        CartList,
        CartBottomCalculateBar,
        CartBottomRemoveBar,

        Scroll
      },
      data() {
        return {
          rightStatus: false
        }
      },
      computed: {
        ...mapGetters(['cartGoodsListLength'])
      },
      methods: {
        backClick() {
          //console.log("backClick");
          this.$router.back()
        },

        rightClick() {
          this.rightStatus = ! this.rightStatus
        }
      }
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

  .back img {
    margin-top: 10px;
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
