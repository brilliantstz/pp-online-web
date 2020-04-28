<template>
  <div id="profile">
    <nav-bar class="profile-nav">
      <div slot="center">在线盆景商城</div>
    </nav-bar>

    <user-info/>

    <!--2.没有单独封装: 不同的地方太多, 需要传过多的参数-->
    <section class="account">
      <div class="account-item">
        <div class="number">
          <span class="balance">0.00</span>元
        </div>
        <div class="account-info">账户余额</div>
      </div>
      <div class="account-item"  @click="orderClick">
        <div class="number">
          <span class="balance">0</span>
        </div>
        <div class="account-info">全部订单</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>分
        </div>
        <div class="account-info">会员积分</div>
      </div>
    </section>

    <profile-list/>

    <switch-login/>


  </div>
</template>

<script>

  import NavBar from 'components/common/navbar/NavBar'

  import UserInfo from './childComps/UserInfo'
  import ProfileList from './childComps/ProfileList'
  import SwitchLogin from './childComps/SwitchLogin'


  export default {
    name: "Profile",
    components: {
      NavBar,

      UserInfo,
      ProfileList,
      SwitchLogin
    },
    methods: {
      orderClick() {
        this.$router.push({
          path: '/order'
        })
      }
    }
  }
</script>

<style scoped>

  #profile {

  }

  .profile-nav {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }


  .account {
    display: flex;
    border-bottom: 5px solid #eeeeee;
  }

  .account-item {
    width: 100%;
    background-color: #fff;
    margin-right: 1px;
    text-align: center;
  }

  .account-item {
    color: #666;
    font-size: 13px;
    padding: 18px;
  }

  .account-item .balance {
    font-size: 24px;
    font-weight: 700;
    color: #ff5f3e;
  }

  .account-info {
    margin-top: 6px;
  }


</style>
