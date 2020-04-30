<template>
    <div id="address-nav-bar">
      <nav-bar>
        <div slot="left" class="back" @click="backClick">
          <img src="~assets/img/common/back.svg" alt="">
        </div>
        <div slot="center">
          我的收获地址
        </div>
        <div slot="right" @click="rightClick">新增</div>
      </nav-bar>
    </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: "AddressNavBar",
    components: {
      NavBar
    },
    methods: {
      backClick() {
        //console.log("backClick");
        this.$router.go(-1)
      },

      rightClick() {
        this.$router.push({
          path: '/newAddress'
        })
      }
    }
  }
</script>

<style scoped>

  #address-nav-bar {
    background-color:  var(--color-tint);
    color: #fff;
  }

  .back img {
    margin-top: 10px;
  }
</style>
