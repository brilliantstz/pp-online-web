<template>
  <div class="cart-list-item">
    <div class="item-selector" @click="checkedClick">
      <check-button :isChecked="cartGoods.isChecked"/>
    </div>
    <div class="item-img">
      <img :src="cartGoods.image" alt="商品图片" />
    </div>
    <div class="item-info">
      <div class="item-title">{{ cartGoods.name }}</div>
      <div class="item-desc">商品描述: {{ cartGoods.title }}</div>
      <div class="info-bottom">
        <div class="item-price left">￥{{ cartGoods.price }}</div>
        <div class="item-count right">X{{ cartGoods.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>

    import CheckButton from 'components/content/checkButton/CheckButton'

    export default {
      name: "CartListItem",
      components: {
        CheckButton
      },
      props: {
        cartGoods: {
          type: Object,
          default() {
            return {}
          }
        }
      },
      methods: {
        checkedClick() {
          //console.log("checkedClick");
          this.cartGoods.isChecked = !this.cartGoods.isChecked
        }
      }
    }
</script>

<style scoped>

  .cart-list-item {
    display: flex;
    width: 100%;
    padding: 5px;
    border-bottom: 1px solid #cccccc;
  }

  .item-selector {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-img {
    padding: 5px;
  }

  .item-img img {
    display: block;
    width: 80px;
    height: 100px;
    border-radius: 5px;
    object-fit: cover;
  }

  .item-info {
    font-size: 17px;
    position: relative;
    overflow: hidden;
    width: 88%;
    padding: 5px 10px;
    color: #333333;
  }

  .item-title, .item-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .item-info .item-desc {
    font-size: 14px;
    margin-top: 15px;
    color: #666666;
  }

  .info-bottom {
    position: absolute;
    right: 10px;
    bottom: 10px;
    left: 10px;
    margin-top: 10px;
  }

  .info-bottom .item-price {
    color: #ff4500;
  }
</style>
