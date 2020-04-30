<template>
    <div id="address-list">
      <address-list-item v-show="addressList.length !== 0" v-for="item in addressList" :address="item"/>

      <div class="show-msg" v-show="addressList.length === 0">

        亲，您暂无收货地址！

      </div>

    </div>
</template>

<script>

  import AddressListItem from './AddressListItem'

  import {mapGetters} from 'vuex'

  export default {
    name: "AddressList",
    components: {
      AddressListItem
    },
    computed: {
      ...mapGetters(['addressList'])
    },
  }
</script>

<style scoped>

  #address-list .show-msg {
    text-align: center;

    height: calc(100Vh - 44px) ;
    line-height: calc(100Vh - 44px) ;

  }


</style>
