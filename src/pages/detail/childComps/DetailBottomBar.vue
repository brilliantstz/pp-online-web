<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"/>
        <span class="text" @click="toService">客服</span>
      </div>
      <div>
        <i class="icon shop"/>
        <span class="text" @click="toShop">店铺</span>
      </div>
      <div>
        <i class="icon collect"/>
        <span class="text" @click="toStar">收藏</span>
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
      methods: {
        toService(){
          console.log("正在跳转到客服页面......")
        },
        toShop(){
          console.log("正在跳转到店铺页面......")
        },
        toStar(){
          console.log("成功收藏该商品")
        },
        addToCart() {
          //console.log("addToCart");
          this.$emit('addToCart')
        },
        buy(){
          console.log("正在跳转到支付页面......")
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

  .bar-left .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 4px auto 3px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
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
