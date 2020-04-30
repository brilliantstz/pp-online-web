<template>
  <div id="update-address">

    <nav-bar id="nav-bar">
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center">
        编辑收获地址
      </div>
      <div slot="right" :class="{active: isActive, click: !isClick}" :="isSave" @click="rightClick">保存</div>
    </nav-bar>

    <div id="update-address-list">
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


      <div class="delete-address" @click="deleteClick">
        <div>
          删除收获地址
        </div>
      </div>

    </div>

  </div>
</template>

<script>

  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: "UpdateAddress",
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
        isShow: false,

      }
    },
    created() {
      const address = this.$route.query.address

      this.receiver = address.receiver
      this.phone = address.phone
      this.area = address.area
      this.detail = address.detail
      this.isDefault = address.isDefault

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
        //console.log("编辑地址......")

        const address = {}
        address.id = this.$route.query.address.id
        address.receiver = this.receiver
        address.phone = this.phone
        address.area = this.area
        address.detail = this.detail
        address.isDefault = this.isDefault

        //console.log(address)
        this.$store.dispatch("updateAddress", address).then(res => {
          this.$toast.showMsg(res)

          this.$router.go(-1)

        })

      },

      defaultClick() {
        this.isDefault = !this.isDefault
      },

      deleteClick() {
        //console.log("删除收获地址")
        this.$store.dispatch("deleteAddress", this.$route.query.address.id).then(res => {
          this.$toast.showMsg(res)

          this.$router.go(-1)
        })
      }
    }
  }
</script>

<style scoped>

  #update-address {

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

  #update-address-list {
    background-color: #fff;

    position: absolute;
    top: 44px;
    bottom: 0;
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

  .delete-address {

    height: 30px;
    line-height: 30px;

    background-color: var(--color-tint);
    text-align: center;

    margin: 10px 10px;
    border-radius: 5px;
  }

</style>
