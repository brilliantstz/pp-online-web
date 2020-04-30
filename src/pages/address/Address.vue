<template>
    <div id="address">
      <address-nav-bar/>

      <scroll class="content"
              ref="scroll"
              :probe-type="3"
              :pullUpLoad="true">

        <address-list/>

      </scroll>

    </div>
</template>

<script>

  import AddressNavBar from './childComps/AddressNavBar'

  import Scroll from 'components/common/scroll/Scroll'
  import AddressList from './childComps/AddressList'

  export default {
    name: "Address",
    components: {
      AddressNavBar,

      Scroll,
      AddressList

    }
  }
</script>

<style scoped>

  #address {
    height: 100vh;

    position: relative;
  }

  .content {

    background-color: #fff;
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 0px;
    left: 0;
    right: 0;

    z-index: 1;

  }

</style>
