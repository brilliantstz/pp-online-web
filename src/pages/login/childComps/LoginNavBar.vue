<template>
  <div id="login-nav-bar">
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center">
        登录/注册
      </div>
    </nav-bar>
  </div>
</template>

<script>

  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: "LoginNavBar",
    components: {
      NavBar
    },
    methods: {
      backClick() {
        //console.log("backClick");
        this.$router.back()
      }
    }
  }
</script>

<style scoped>

  #login-nav-bar {
    background-color:  var(--color-tint);
  }

  .back img {
    margin-top: 10px;
  }

</style>
