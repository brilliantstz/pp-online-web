<template>
    <div class="detail-swiper">
      <swiper class="swiper-image">
        <swiper-item v-for="item in formatDetailSwipperImages" class="swiper-item">
          <img :src="item" alt="">
        </swiper-item>
      </swiper>
    </div>
</template>

<script>

  import {Swiper, SwiperItem} from 'components/common/swiper'

    export default {
        name: "DetailSwiper",
        components: {
          Swiper,
          SwiperItem
        },
        props: {
          detailSwiperImages: {
            type: String,
            default() {
              return "";
            }
          }
        },
        computed: {
          formatDetailSwipperImages(){
            return this.detailSwiperImages.split(";")
          }
        }
    }
</script>

<style scoped>
  .swiper-image {
    height: 240px;
    overflow: hidden;
  }
</style>
