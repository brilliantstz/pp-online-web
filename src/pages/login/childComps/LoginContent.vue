<template>
  <div id="login-content">
    <div class="switch">
      <router-link to="/login">
        <div>登录</div>
      </router-link>
      <router-link to="/register">
        <div>注册</div>
      </router-link>
    </div>

    <router-view/>

  </div>
</template>

<script>
  export default {
    name: "LoginContent",
    data() {
      return {
        isActive: true
      }
    },
    methods: {
    }
  }
</script>

<style scoped>

  #login-content {

    margin-top: 30px;

  }

  .switch {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
  }

  .active {
    color: var(--color-high-text);
  }

</style>
