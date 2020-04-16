<template>
  <div id="tab-content-category">
    <grid-view :cols="3" :lineSpace="15" :v-margin="20" v-if="childCategory">
      <div class="item" v-for="(item, index) in childCategory" :key="index">
        <a>
          <img class="item-img" :src="item.cateImageUrl" alt="" @load="imageLoad">
          <div class="item-text">{{item.cateName}}</div>
        </a>
      </div>
    </grid-view>
  </div>
</template>

<script>
  import GridView from 'components/common/gridView/GridView'

  export default {
    name: "TabContentCategory",
    components: {
      GridView
    },
    data(){
      return {
        isLoad: false
      }
    },
    props: {
      childCategory: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      imageLoad() {
        if (!this.isLoad){
          this.$emit("imageLoad")
          this.isLoad = true
        }
      }
    }
  }
</script>

<style scoped>

  #tab-content-category{
    border-bottom: 10px solid #eeeeee;
  }

  .panel img {
    width: 100%;
  }

  .item {
    text-align: center;
    font-size: 12px;
  }

  .item-img {
    height: 64px;
    width: 64px;
    border-radius: 50%;
  }

  .item-text {
    margin-top: 15px;
  }
</style>
