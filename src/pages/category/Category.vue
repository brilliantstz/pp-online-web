<template>
  <div id="category">
    <nav-bar class="category-nav">
      <div slot="center">商品分类</div>
    </nav-bar>


    <div class="category-content">
      <tab-menu :parent-category="parentCategory" :parent-category-index="parentCategoryIndex" @selectItem="selectItem"/>

      <tab-control
        class="tab-control1"
        ref="tabControl1"
        :titles="['推荐', '最新', '最热']"
        @tabClick="tabClick"
        v-show="isShowTabControll"/>

      <scroll class="content" ref="scroll"
              :probe-type="3"
              :pullUpLoad="true"
              @scroll="contentScroll">

        <tab-content-category :child-category="childCategory" @imageLoad="imageLoad"/>

        <tab-control  ref="tabControl2"
                      :titles="['推荐', '最新', '最热']"
                      @tabClick="tabClick" />

        <tab-content-detail :child-category-detail="childCategoryDetail" />


      </scroll>

      <back-top @click.native="backTopClick" v-show="isShowBackTop"/>

    </div>

  </div>
</template>

<script>

  import NavBar from 'components/common/navbar/NavBar'

  import TabMenu from './childComps/TabMenu'

  import TabContentCategory from './childComps/TabContentCategory'
  import TabControl from 'components/content/tabControl/TabControl'
  import TabContentDetail from './childComps/TabContentDetail'

  import Scroll from 'components/common/scroll/Scroll'

  import BackTop from 'components/content/backTop/BackTop'

  import { getParentCategory, getChildCategory, getParentCategoryGoods } from "network/category"

  export default {
    name: "Category",
    components: {
      NavBar,

      TabMenu,

      TabContentCategory,
      TabControl,
      TabContentDetail,

      Scroll,

      BackTop
    },
    data() {
      return {
        parentCategory: [],
        childCategoryData: [],

        currentIndex: -1,
        parentCategoryIndex: -1,
        currentType: 'recommend',

        isShowBackTop: false,
        tabOffsetTop: 0,
        isShowTabControll: false,
      }
    },
    computed: {
      childCategory(){
        if (this.currentIndex === -1) {
          return []
        }else{
          return this.childCategoryData[this.currentIndex].childCategory
        }
      },
      childCategoryDetail() {
        if (this.currentIndex === -1) {
          return []
        }else{
          return this.childCategoryData[this.currentIndex].childCategoryDetail[this.currentType]
        }
      }
    },
    created() {
      console.log(this.$route.query.currentIndex);
      if (typeof (this.$route.query.currentIndex) === 'undefined'){
        this.parentCategoryIndex = 0
      }else{
        this.parentCategoryIndex = this.$route.query.currentIndex
      }

      //1 请求一级分类数据
      this.getParentCategory()

    },
    mounted() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },
    methods: {

      //1 请求一级分类数据
      getParentCategory() {
        getParentCategory().then(res => {
          this.parentCategory = res.data
          // 2.初始化每个类别的子数据
          for (let i = 0; i < this.parentCategory.length; i++) {
            this.childCategoryData[i] = {
              childCategory: [],
              childCategoryDetail: {
                'recommend': [],
                'newest': [],
                'hottest': []
              }
            }
          }
          // 3.请求初始化分类的数据
          this.getChildCategory(this.parentCategoryIndex)
        })
      },

      //2 请求二级分类数据
      getChildCategory(index){
        this.currentIndex = index
        const categoryId = this.parentCategory[index].categoryId
        getChildCategory(categoryId).then(res => {
          this.childCategoryData[index].childCategory = res.data
          this.childCategoryData = [...this.childCategoryData]
        })
        this.getParentCategoryGoods(index,categoryId,'recommend')
        this.getParentCategoryGoods(index,categoryId,'newest')
        this.getParentCategoryGoods(index,categoryId,'hottest')
      },

      //3 请求一级分类数据下的所有商品
      getParentCategoryGoods(index,categoryId,type){
        getParentCategoryGoods(categoryId,type).then(res => {
          console.log(res.data);
          this.childCategoryData[index].childCategoryDetail[type] = res.data
        })
      },

      selectItem(index) {
        //console.log(index);
        this.getChildCategory(index)
      },
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
      imageLoad() {
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      }

    }
  }
</script>

<style scoped>
  #category {
    height: 100vh;

    position: relative;
  }

  .category-nav {
    background-color: var(--color-tint);
    color: #fff;
  }

  .tab-control1{
    position: absolute;
    top: 0;
    left: 70px;
    right: 0;

    z-index: 99;

  }

  .category-content {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;

    display: flex;
  }

  .content {
    height: 100%;
    flex: 1;

    overflow: hidden;

    position: absolute;

    top: 0;
    bottom: 0;
    left: 70px;
    right: 0;

  }

</style>
