<template>
    <div id="star-list">
      <star-list-item  v-show="starGoodsList.length !== 0" v-for="item in starGoodsList" :star-goods="item"/>

      <div class="show-msg" v-show="starGoodsList.length === 0">

        亲，您的收藏夹暂无商品！

      </div>

    </div>



</template>
<script>

    import StarListItem from './StarListItem'

    import {mapGetters} from 'vuex'

    export default {
      name: "StarList",
      components: {
        StarListItem,
      },
      computed: {
        ...mapGetters(['starGoodsList'])
      },
      created() {
        console.log(this.starGoodsList.length === 0)
      }
    }
</script>

<style scoped>


  #star-list .show-msg {
    text-align: center;

    height: calc(100Vh - 93px) ;
    line-height: calc(100Vh - 93px) ;

  }

</style>
