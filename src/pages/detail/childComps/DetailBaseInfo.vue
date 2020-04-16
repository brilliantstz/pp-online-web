<template>
  <!-- 判断对象是否为空 -->
  <div class="base-info" v-if="Object.keys(detailBaseInfo).length !== 0">
    <div class="info-title">{{ detailBaseInfo.goods.goodsTitle}}</div>
    <div class="info-price">
      <span class="price">{{ detailBaseInfo.goodsDetail.price }}</span>
      <span class="o-price">价格￥{{ detailBaseInfo.goodsDetail.oldPrice }}</span>
    </div>
    <div class="info-other">
      <span>销量 {{ detailBaseInfo.goods.sale }}</span>
      <span>收藏{{ detailBaseInfo.goods.star }}人</span>
    </div>
  </div>
</template>

<script>
    export default {
      name: "DetailBaseInfo",
      props: {
        detailBaseInfo: {
          type: Object,
          default() {
            return {};
          }
        }
      }
    }
</script>

<style scoped>
  .base-info {
    width: 100%;
    margin-top: 15px;
    padding: 0 10px;
    color: #999999;
    border-bottom: 5px solid #f2f5f8;
  }

  .info-title {
    text-align: justify;
    color: #222222;
    font-size: 14px;
  }

  .info-price {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .info-price .o-price {
    font-size: 14px;
    text-decoration: line-through;
  }

  .info-price .price {
    font-size: 16px;
    color: #ff5777;
  }


  .info-other {
    font-size: 14px;
    line-height: 30px;
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  }

</style>
