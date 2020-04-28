<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <div class="service" @click="toService">
          <img src="~assets/img/detail/service.svg" alt="">
        </div>
        <span class="text" >客服</span>
      </div>
      <div>
        <div class="shop" @click="toShop">
          <img src="~assets/img/detail/shop.svg" alt="">
        </div>
        <span class="text" >店铺</span>
      </div>
      <div>
        <div class="collect"  @click="toStar">
          <img src="~assets/img/detail/star.svg" alt="" v-if="!startActive">
          <img src="~assets/img/detail/star-active.svg" alt="" v-if="startActive">
        </div>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy" @click="buy">立即购买</div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "DetailBottomBar",
      props: {
        startActive: {
          type: Boolean,
          default() {
            return false
          }
        }
      },
      methods: {
        toService(){
          console.log("正在跳转到客服页面......")
        },
        toShop(){
          console.log("正在跳转到店铺页面......")
        },
        toStar(){
          //console.log("成功收藏该商品")
          this.$emit('addToStar')
        },
        addToCart() {
          //console.log("addToCart");
          this.$emit('addToCart')
        },
        buy(){
          //console.log("正在跳转到支付页面......")
          this.$emit('buy')
        }
      }
    }
</script>

<style scoped>
  .bottom-bar {
    height: 49px;
    background-color: #ffffff;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    text-align: center;

    z-index: 1;

  }

  .bar-item {
    display: flex;
    flex: 1;
  }

  .bar-item>div {
    flex: 1;
  }

  .bar-left .text {
    font-size: 14px;
  }

  .bar-left {
    padding: 5px 0px;
  }

  .bar-left img {
    height: 24px;
    width: 24px;
  }

  .bar-left .service {
    background-position: 0 -54px;
  }

  .bar-left .shop {
    background-position: 0 -98px;
  }

  .bar-right {
    font-size: 16px;
    color: #fff;
    line-height: 49px;
  }

  .bar-right .cart {
    background-color: #ffe817;
    color: #333;
  }

  .bar-right .buy {
    background-color: #f69;
  }

</style>
