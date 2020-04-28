<template>
  <div id="switch-login">
    <div class="loginout" @click="loginoutClick">
      退出登录
    </div>
  </div>
</template>

<script>
  export default {
    name: "SwitchLogin",
    methods: {
      loginoutClick() {
        this.$store.dispatch("removeUserAndToken", "removeUserAndToken").then(res => {
          this.$toast.showMsg(res)

          this.$router.go(-1)

        })
      }
    }
  }
</script>

<style scoped>

  #switch-login {
    margin: 30px 10px;
    display: flex;
  }

  .loginout {
    background-color: var(--color-tint);
    color: #ffffff;

    height: 40px;
    line-height: 40px;

    text-align: center;
    border-radius: 10px;

    flex: 1;

  }

</style>
