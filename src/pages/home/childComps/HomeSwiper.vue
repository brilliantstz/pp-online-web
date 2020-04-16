<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href="item.imageLink" target="_blank">
        <img :src="item.imageUrl" alt="item.title" @load="imageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        isLoad: false
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      imageLoad() {
        //console.log('轮播图图片加载....');
        if (!this.isLoad){
          this.$emit('swiperImageLoad')
          this.isLoad = true
        }

      }
    }
  }
</script>

<style scoped>

  img {
    height: 166px;
    width: 100%;
  }

</style>
