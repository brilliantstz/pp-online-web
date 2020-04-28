<template>
  <div id="order-nav-bar">
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center">
        订单列表(0)
      </div>
      <div slot="right" @click="rightClick" v-if="!rightStatus">管理</div>
      <div slot="right" @click="rightClick" v-if="rightStatus">完成</div>
    </nav-bar>
  </div>
</template>

<script>

  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: "OrderNavBar",
    components: {
      NavBar
    },
    data() {
      return {
        rightStatus: false
      }
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

  #order-nav-bar {
    background-color:  var(--color-tint);
    color: #fff;
  }

  .back img {
    margin-top: 10px;
  }

</style>
