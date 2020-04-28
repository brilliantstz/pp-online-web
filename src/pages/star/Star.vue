<template>
  <div id="star">

    <nav-bar class="star-nav">
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center">收藏夹({{starGoodsListLength}})</div>
      <div slot="right" @click="rightClick" v-if="!rightStatus">管理</div>
      <div slot="right" @click="rightClick" v-if="rightStatus">完成</div>
    </nav-bar>

    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            :pullUpLoad="true">

      <star-list/>

    </scroll>

    <star-bottom-add-bar v-if="!rightStatus"/>
    <star-bottom-remove-bar v-if="rightStatus"/>

  </div>
</template>

<script>

  import NavBar from 'components/common/navbar/NavBar'

  import Scroll from 'components/common/scroll/Scroll'
  import StarList from './childComps/StarList'

  import StarBottomAddBar from './childComps/StarBottomAddBar'
  import StarBottomRemoveBar from './childComps/StarBottomRemoveBar'

  import {mapGetters} from 'vuex'

  export default {
    name: "Star",
    components: {
      NavBar,

      Scroll,
      StarList,
      StarBottomAddBar,
      StarBottomRemoveBar
    },
    data() {
      return {
        rightStatus: false
      }
    },
    computed: {
      ...mapGetters(['starGoodsListLength'])
    },
    methods: {
      backClick() {
        //console.log("backClick");
        this.$router.back()
      },

      rightClick() {
        this.rightStatus = ! this.rightStatus
      }
    }
  }
</script>

<style scoped>

  #star {
    height: 100vh;
    position: relative;
  }

  .star-nav {
    background-color: var(--color-tint);
    color: #fff;
  }

  .back img {
    margin-top: 10px;
  }

  .content {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 0px;
    left: 0;
    right: 0;

  }


</style>
