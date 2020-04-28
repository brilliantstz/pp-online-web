<template>
  <div id="user-info">
    <div class="clear-fix">
      <slot name="user-icon">
        <img class="user-avatar left" src="~assets/img/profile/default_avatar.jpg">
      </slot>
      <div class="login-info left">
        <slot name="user-nickname">
          <div @click="toLogin" v-show="!isLogin">暂无登录，请登录！</div>
          <div v-show="isLogin">{{loginUserName}}</div>
        </slot>
      </div>
      <slot name="user-icon">
        <img class="user right" src="~assets/img/profile/arrow.png">
      </slot>
    </div>
  </div>
</template>

<script>

  import  LocalStorageUtil  from 'localStorage/index'

  export default {
    name: "UserInfo",
    data() {
      return {
        isLogin: false
      }
    },
    computed: {
      loginUserName() {

        const storage = new LocalStorageUtil()
        const userAndToken = storage.get("userAndToken")

        if (userAndToken === null){
          this.isLogin = false
          return null;
        } else{
          this.isLogin = true
          return userAndToken.user.username
        }


      }
    },
    methods: {
      toLogin() {
        this.$router.push({
          path: '/toLogin',
        })
      }
    }
  }
</script>

<style scoped>
  #user-info {
    background-color: var(--color-tint);
    padding: 15px;
    margin-top: -5px;
  }

  #user-info .user-avatar {
    width: 60px;
    height: 60px;
    border-radius: 30px;
  }

  #user-info .user {
    margin-top: 10px;
  }

  #user-info .login-info {
    font-size: 16px;
    color: #fff;
    margin-top: 18px;
    margin-left: 20px;
  }

</style>
