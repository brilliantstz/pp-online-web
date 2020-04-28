<template>
  <div id="login">
    <login-nav-bar/>

    <login-content/>

  </div>
</template>

<script>

  import LoginNavBar from './childComps/LoginNavBar'

  import LoginContent from './childComps/LoginContent'

  export default {
    name: "Login",
    components: {
      LoginNavBar,

      LoginContent
    }
  }
</script>

<style scoped>

  #login {

  }

</style>
