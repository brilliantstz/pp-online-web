<template>
    <div id="profile-list">
      <div class="profile-list-item" @click="orderClick">
        <div class="left-icon">
          <img src="~assets/img/profile/order.svg" alt="">
        </div>
        <div class="center-info">
          <span>我的订单</span>
        </div>
        <div class="right-icon">
          <img src="~assets/img/profile/arrow.png" alt="">
        </div>
      </div>
      <div class="profile-list-item" @click="cartClick">
        <div class="left-icon">
          <img src="~assets/img/profile/cart.svg" alt="">
        </div>
        <div class="center-info">
          <span>我的购物车</span>
        </div>
        <div class="right-icon">
          <img src="~assets/img/profile/arrow.png" alt="">
        </div>
      </div>
      <div class="profile-list-item" @click="starClick">
        <div class="left-icon">
          <img src="~assets/img/profile/star.svg" alt="">
        </div>
        <div class="center-info">
          <span>我的收藏</span>
        </div>
        <div class="right-icon">
          <img src="~assets/img/profile/arrow.png" alt="">
        </div>
      </div>
      <div class="profile-list-item" @click="addressClick">
        <div class="left-icon">
          <img src="~assets/img/profile/address.svg" alt="">
        </div>
        <div class="center-info">
          <span>我的收获地址</span>
        </div>
        <div class="right-icon">
          <img src="~assets/img/profile/arrow.png" alt="">
        </div>
      </div>
    </div>
</template>

<script>

  export default {
    name: "ProfileList",
    methods: {
      orderClick() {
        this.$router.push({
          path: '/order'
        })
      },

      cartClick() {
        this.$router.push({
          path: '/cart'
        })
      },

      starClick() {
        this.$router.push({
          path: '/star'
        })
      },

      addressClick() {
        this.$router.push({
          path: '/address'
        })
      }
    }
  }
</script>

<style scoped>

  #profile-list {
    background-color: #ffffff;
    display: flex;
    flex-wrap: wrap;
  }

  .profile-list-item {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 5px;
    border-bottom: 1px solid #eeeeee;
  }

  .left-icon, right-icon {
    flex: 1;
  }

  .right-icon img{
    float: right;
  }

  .center-info {
    flex: 4;
    padding: 10px 0;
  }

  #profile-list div:nth-child(4) {
    border-bottom: 5px solid #eeeeee;
  }

</style>
