<template>
  <div id="content-register">
    <form>
      <input type="text" placeholder="请输入手机号" v-model="phone" :="phoneValid" >
      <div class="verify">
        <input type="text" placeholder="请输入验证码" v-model="code">
        <input type="button" v-show="isPhone" class="verify-code" :value="codeText"
               :class="{beginSend: !isBeginSend}"
               :disabled="!isSend" @click="sendCode">

        <input type="button" v-show="!isPhone" class="verify-code beginSend" :value="codeText"
               @click="phoneMsg">

      </div>
      <input type="text" placeholder="请输入用户名" v-model="username" >
      <input type="password" placeholder="请设置密码" v-model="password">
      <input type="button" value="注册并登录" :="register" :disabled="!isRegister"
             :class="{active: isActive}" @click="registerClick">
    </form>
  </div>
</template>

<script>

  import { getPhoneCode, register} from 'network/profile'

  export default {
    name: "ContentRegister",
    data() {
      return {
        phone: '',
        code: '',
        username: '',
        password: '',
        isRegister: false,
        isBeginSend: false,
        isActive: false,
        isSend: true,
        isPhone: false,
        codeText: '发送验证码',
      }
    },
    computed: {
      register() {
        if (this.code && this.username && this.password !== "") {
          this.isRegister = true
          this.isActive = true
        }else{
          this.isRegister = false
          this.isActive = false
        }
      },
      phoneValid() {
        if (!(/^1[3456789]\d{9}$/.test(this.phone))){
          //console.log("手机号码格式不正确")
          this.isSend = false
          this.isPhone = false
        } else{
          //console.log("手机号码不正确")
          this.isSend = true
          this.isPhone = true
        }
      }
    },
    methods: {
      sendCode() {

        var that = this

        var sendTime = 60

        timeDown()

        getPhoneCode(this.phone).then(res => {
          console.log(res.data)
        })

        function timeDown() {
          if (sendTime == 0){

            that.isSend = true

            that.isBeginSend = false

            that.codeText = '发送验证码'

            sendTime = 60

            return;

          }else{

            that.isSend = false

            that.isBeginSend = true

            that.codeText = '' + (sendTime --) + '秒后重发'
          }
          setTimeout(function () {
            timeDown()
          },1000)
        }


      },

      phoneMsg() {
        this.$toast.showMsg("手机号不正确")
      },

      registerClick() {
        //console.log("registerClick");
        const frontUser = {
          username: this.username,
          password: this.password,
          phone: this.phone
        }

        register(frontUser, this.code).then(res => {

          this.$toast.showMsg(res.msg)

        })


      }

    }
  }
</script>

<style scoped>

  #content-register {

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

  input:nth-child(5) {
    color: #ffffff;
  }

  .active {
    background-color: var(--color-tint);
  }

  .verify {
    display: flex;
  }

  .verify .verify-code {
    width: 50%;
    border-left: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border: 0;
    color: #fff;
  }

  .beginSend {
    background: #3091e7;
  }

  .verify input:nth-child(1) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

</style>
