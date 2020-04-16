<template>
    <div class="cart-list">
      <cart-list-item v-for="item in cartGoodsList" :cart-goods="item"/>
    </div>
</template>
<script>

    import CartListItem from './CartListItem'

    import {mapGetters} from 'vuex'

    export default {
      name: "CartList",
      components: {
        CartListItem
      },
      computed: {
        ...mapGetters(['cartGoodsList'])
      }
    }
</script>

<style scoped>


</style>
