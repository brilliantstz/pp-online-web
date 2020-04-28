<template>
    <div class="goods-item" @click="goodsItemClick">
      <img v-lazy="goodsItem.goodsImageUrl" alt="" @load="imageLoad">
      <div class="goods-info">
        <p>{{goodsItem.goodsTitle}}</p>
        <span class="price">{{goodsItem.price}}</span>
        <span>{{goodsItem.sale}}人已付款</span>
        <p>{{goodsItem.createTime}}</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsListItem",
        data() {
          return {
            goodsItemId: ''
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
            this.goodsItemId = this.goodsItem.goodsId
            this.$router.push({
              path: '/detail',
              query: {
                goodsItemId: this.goodsItemId
              }
            })
          }
        }
    }
</script>

<style scoped>
  .goods-item {
    position: relative;

    width: 46%;
    flex: 1;

    margin: 5px 4px;


  }

  .goods-item img {
    height: 240px;
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 11px;
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
