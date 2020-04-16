<template>
    <div class="goods-item" @click="goodsItemClick">
      <img v-lazy="goodsItem.goods.goodsImageUrl" alt="" @load="imageLoad">
      <div class="goods-info">
        <p>{{goodsItem.goods.goodsTitle}}</p>
        <span class="price">￥{{goodsItem.goodsDetail.newPrice}}</span>
        <span>{{goodsItem.goods.sale}}人已付款</span>
        <p>{{goodsItem.goods.createTime}}</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsListItem",
        data() {
          return {
            goodsItemDetail: {}
          }
        },
        props: {
          goodsItem: {
            type: Object,
            default(){
              return {}
            },
          }
        },
        computed: {

        },
        methods: {
          imageLoad() {
            //console.log('imageLoad');
            this.$bus.$emit('itemImageLoad')
          },
          goodsItemClick() {
            //console.log(this.goodsItem);
            this.goodsItemDetail = this.goodsItem
            this.$router.push({
              path: '/detail',
              query: {
                goodsItemDetail: this.goodsItemDetail
              }
            })
          }
        }
    }
</script>

<style scoped>
  .goods-item {
    margin-bottom: 10px;
    position: relative;

    width: 48%;
    margin-left: 4px;

  }

  .goods-item img {
    height: 240px;
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    overflow: hidden;
    text-align: center;

  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

</style>
