<template>
    <div id="home">
      <nav-bar class="home-nav">
        <div slot="center">盆景商城</div>
      </nav-bar>

      <tab-control class="tab-control"
                   :titles="['推荐', '最新', '最热']"
                   ref="tabControl1"
                   @tabClick="tabClick"
                   v-show="isShowTabControll"/>

      <scroll class="content" ref="scroll"
              :probe-type="3"
              :pullUpLoad="true"
              @scroll="contentScroll"
              @pullingUp="loadMoreData">

        <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>

        <home-recommend-view :recommends="recommends"/>

        <tab-control
          :titles="['推荐', '最新', '最热']"
          ref="tabControl2"
          @tabClick="tabClick"/>

        <goods-list :goodsList="showGoods"/>


      </scroll>

      <back-top @click.native="backTopClick" v-show="isShowBackTop"/>



    </div>
</template>

<script>

  import NavBar from 'components/common/navbar/NavBar'

  import HomeSwiper from './childComps/HomeSwiper'
  import HomeRecommendView from './childComps/HomeRecommendView'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'


  import BackTop from 'components/content/backTop/BackTop'
  import Scroll from 'components/common/scroll/Scroll'

  import { getHomeCarouselData, getHomeRecommendData, getHomeGoodsData} from "network/home"
  import {imgListenerMixin} from 'common/mixin'


  export default {
    name: "Home",
    components: {
      NavBar,

      HomeSwiper,
      HomeRecommendView,
      TabControl,
      GoodsList,

      BackTop,
      Scroll
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goodsList: {
          'recommend': {page: 0, list: []},
          'newest': {page: 0, list: []},
          'hottest': {page: 0, list: []}
        },

        currentType: 'recommend',

        isShowBackTop: false,
        tabOffsetTop: 0,
        isShowTabControll: false,
        saveY: 0
      }
    },
    computed: {
      showGoods() {
        return this.goodsList[this.currentType].list
      }
    },
    // vue重复代码的混入
    mixins: [imgListenerMixin],
    created() {
      //1  请求首页轮播图数据
      this.getHomeCarouselData();

      //2 请求首页推荐数据
      this.getHomeRecommendData();

      //3 请求首页商品相关的数据,默认推荐，最新和最热全部查询第一页
     this.getHomeGoodsData('recommend')
     this.getHomeGoodsData('newest')
     this.getHomeGoodsData('hottest')

    },
    destroyed() {
      //console.log('destroyed.......');
    },
    activated(){
      //console.log("activated");
      //this.$refs.scroll.scrollTo(0,this.saveY,0)
      //this.$refs.scroll.refresh()
    },
    deactivated(){
      //console.log("deactivated");
      // 1 保存y值
      //this.saveY = this.$refs.scroll.getScrollY()

      // 2 取消全局事件的监听
      this.$bus.$off('itemImageLoad',this.itemImgListener)
    },
    methods: {

      /*
      * 事件监听相关
      * */

      tabClick(index) {
        //console.log(index);
        switch (index) {
          case 0 :
            this.currentType = 'recommend'
            break;
          case 1 :
            this.currentType = 'newest'
            break;
          case 2 :
            this.currentType = 'hottest'
            break;
        }
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
      },

      swiperImageLoad(){
        // 获取tabControll的offsetTop
        //console.log(this.$refs.tabControl2.$el.offsetTop);

        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      },
      backTopClick() {
        //console.log('backTopClick');
        this.$refs.scroll.scrollTo(0, 0)
      },
      contentScroll(position) {
        //console.log(position);
        // 判断是否显示backTop
        this.isShowBackTop = (-position.y) > 600

        //决定tabControll是否具有吸顶效果
        this.isShowTabControll = (-position.y) > this.tabOffsetTop

      },
      loadMoreData(){
        //console.log("上拉加载更多......"+this.currentType)
        this.getHomeGoodsData(this.currentType)
      },


      /*
     * 网络请求相关
     * */
      getHomeCarouselData(){
        getHomeCarouselData().then(res => {
          this.banners = res.data;
        })
      },

      getHomeRecommendData(){
        getHomeRecommendData().then(res => {
          this.recommends = res.data;
        })
      },

      getHomeGoodsData(type){
        const page = this.goodsList[type].page + 1;
        getHomeGoodsData(type, page).then(res => {
          //console.log(res.data.records);
          this.goodsList[type].list.push(...res.data.records)
          this.goodsList[type].page++;
          this.$refs.scroll.finishPullUp()
          this.$refs.scroll.refresh()
        })
      },

    }

  }
</script>

<style scoped>

  #home {
    height: 100vh;

    position: relative;

  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }

  .tab-control {
    position: relative;
    z-index: 9;
  }

  .content {
    overflow: hidden;

    position: absolute;

    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;

  }


</style>
