<template>
  <div id="content-login">
    <form>
      <input type="text" placeholder="请输入用户名" v-model="username" >
      <input type="password" placeholder="请输入密码" v-model="password">
      <input type="button" value="登录" :="login"
             :disabled="!isLogin" :class="{active: isActive}" @click="loginClick">
    </form>
  </div>
</template>

<script>

  import { login } from 'network/profile'

  export default {
    name: "ContentLogin",
    data() {
      return {
        username: '',
        password: '',
        isLogin: false,
        isActive: false
      }
    },
    computed: {
      login() {
        if (this.username && this.password !== "") {
          this.isLogin = true
          this.isActive = true
        }else{
          this.isLogin = false
          this.isActive = false
        }
      }
    },
    methods: {
      loginClick() {
        //this.$toast.showMsg("登录验证")

        const frontUser = {
          username: this.username,
          password: this.password
        }

        login(frontUser).then(res => {
          //this.$toast.showMsg(res.msg)

          if (res.code == 200){
            //将token和用户信息存入localstorage

            const obj = {
              user: frontUser,
              token: res.data
            }

            this.$store.dispatch('addUserAndToken', obj).then(res => {
              this.$toast.showMsg(res)

              this.$router.replace({
                path: '/'
              })

            })
          }else{
            this.$toast.showMsg(res.msg)
          }
        })

      }
    }
  }
</script>

<style scoped>

  #content-login {

    margin: 20px 20px;

  }

  input {
    display: block;
    width: 100%;
    border: 1px solid #eeeeee;
    outline: none;
    padding: 5px 10px;
    border-radius: 5px;
    margin: 10px 0;
  }

  input:nth-child(3) {
    color: #ffffff;
  }

  .active {
    background-color: var(--color-tint);
  }

</style>
