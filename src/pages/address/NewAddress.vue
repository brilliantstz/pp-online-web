<template>
  <div id="new-address">

    <nav-bar id="nav-bar">
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center">
        新增收获地址
      </div>
      <div slot="right" :class="{active: isActive, click: !isClick}" :="isSave" @click="rightClick">保存</div>
    </nav-bar>

    <div id="new-address-list">
      <form>
        <div class="item">
          <input class="info" type="text" placeholder="收货人" v-model="receiver"/>
          <span class="icon">
          <img src="~assets/img/address/contact.svg" alt="">
        </span>
        </div>
        <div class="item">
          <input class="info" type="text" placeholder="手机号码" v-model="phone"/>
          <span class="icon">
          <img src="~assets/img/address/phone.svg" alt="">
        </span>
        </div>
        <div class="item">
          <input class="info" type="text" placeholder="所在地区" v-model="area"/>
          <span class="icon">
          <img src="~assets/img/address/area.svg" alt="">
        </span>
        </div>
        <div class="item">
          <input class="info" type="text" placeholder="详细地址：如门牌号、楼栋号、单元室等" v-model="detail"/>
        </div>
        <div class="item">
          <input class="info" type="text" placeholder="设置默认地址" v-model="isDefaultAddress"/>
          <span class="icon">
          <img src="~assets/img/address/off.svg" alt="" v-show="!isDefault" @click="defaultClick">
          <img src="~assets/img/address/on.svg" alt="" v-show="isDefault" @click="defaultClick">
        </span>
        </div>
      </form>
    </div>

  </div>
</template>

<script>

  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: "NewAddress",
    components: {
      NavBar
    },
    data() {
      return {
        isDefault: false,

        receiver: '',
        phone: '',
        area: '',
        detail: '',
        isDefaultAddress: this.isDefault,

        isActive: true,
        isClick: false,
        isShow: false


      }
    },
    computed: {
      isSave() {
        if (this.receiver && this.phone && this.area && this.detail !== "") {
          this.isActive = false
          this.isClick = true
        }else {
          this.isActive = true
          this.isClick = false
        }
      },
    },
    methods: {
      backClick() {
        this.$router.go(-1)
      },

      rightClick() {
        //console.log("保存地址......")

        const address = {}
        address.id = Date.now()
        address.receiver = this.receiver
        address.phone = this.phone
        address.area = this.area
        address.detail = this.detail
        address.isDefault = this.isDefault

        console.log(address)
        this.$store.dispatch("addToAddress", address).then(res => {
          this.$toast.showMsg(res)

          this.$router.go(-1)

        })

      },

      defaultClick() {
        this.isDefault = !this.isDefault
      }
    }
  }
</script>

<style scoped>

  #new-address {

    background-color:  var(--color-tint);
    color: #fff;
    position: relative;

    height: 100vh;

  }

  .active {
    color: var(--color-text);
  }

  .click {
    pointer-events: none;
  }

  .back img {
    margin-top: 10px;
  }

  #new-address-list {
    background-color: #fff;

    position: absolute;
    top: 44px;
    bottom: 0px;
    left: 0;
    right: 0;

    z-index: 1;
  }

  .item {
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    padding-right: 3px;
    border-bottom: 1px solid #eeeeee;
  }

  .info {
    font-size: 14px;
  }

  .icon {
    float: right;
  }

  input {

    width: 85%;
    border: 0;

    outline: medium;

  }


</style>
