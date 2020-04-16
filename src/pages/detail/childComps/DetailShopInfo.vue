<template>
  <div class="shop-info" v-if="Object.keys(shopInfo).length !== 0">
    <div class="shop-top">
      <img :src="shopInfo.shopAvatar" alt=""/>
      <span class="title">{{ shopInfo.shopName }}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sales">
          <div class="sales-count">
            0
          </div>
          <div class="sales-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">
            0
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr>
            <td>描述相符</td>
            <td class="score">
             4.0
            </td>
            <td class="better">
              <span>低</span>
            </td>
          </tr>
          <tr>
            <td>价格合理</td>
            <td class="score score-better" >
              5.0
            </td>
            <td class="better better-more">
              <span>高</span>
            </td>
          </tr>
          <tr>
            <td>描述相符</td>
            <td class="score">
              4.0
            </td>
            <td class="better">
              <span>低</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom-info">
      <p class="address">
        {{shopInfo.address}}
      </p>
      <p class="tel">
        {{shopInfo.tel}}
      </p>
    </div>
    <div class="shop-bottom">
        <span class="enter-shop">
          进店逛逛
        </span>
    </div>
  </div>
</template>

<script>
    export default {
      name: "DetailShopInfo",
      props: {
        shopInfo: {
          type: Object,
          default() {
            return {};
          }
        }
      },
      filters: {
        salesCountFilter(value) {
          if (value < 10000) return value;
          return (value / 10000).toFixed(1) + "万";
        }
      }
    }
</script>

<style scoped>
  .shop-info {
    padding: 15px 8px;
    border-bottom: 5px solid #f2f5f8;
  }
  .shop-top {
    line-height: 45px;
    display: flex;
    align-items: center;
  }
  .shop-top img {
    width: 45px;
    height: 45px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
  }
  .shop-top .title {
    margin-left: 10px;
    vertical-align: center;
  }
  .shop-middle {
    display: flex;
    align-items: center;
    margin-top: 5px;
  }
  .shop-middle-item {
    flex: 1;
  }
  .shop-middle-left {
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    color: #333333;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }
  .sales-count,
  .goods-count {
    font-size: 18px;
  }
  .sales-text,
  .goods-text {
    font-size: 12px;
    margin-top: 10px;
  }
  .shop-middle-right {
    font-size: 13px;
    color: #333333;
  }
  .shop-middle-right table {
    width: 120px;
    margin-left: 30px;
  }
  .shop-middle-right table td {
    padding: 5px 0;
  }
  .shop-middle-right .score {
    color: #5ea732;
  }
  .shop-middle-right .score-better {
    color: #f13e3a;
  }
  .shop-middle-right .better span {
    padding: 3px;
    text-align: center;
    color: #ffffff;
    background-color: #5ea732;
  }
  .shop-middle-right .better-more span {
    background-color: #f13e3a;
  }

  .shop-bottom-info {
    margin-top: 5px;
    margin-left: 20px;
  }

  .shop-bottom-info .address{
    position: relative;
  }

  .shop-bottom-info .address::before{
    content: '';
    position: absolute;
    left: -20px;
    width: 16px;
    height: 16px;
    background: url("~assets/img/detail/address.svg");
  }

  .shop-bottom-info .tel{
    margin-top: 15px;
    position: relative;
  }

  .shop-bottom-info .tel::before{
    content: '';
    position: absolute;
    left: -20px;
    width: 16px;
    height: 16px;
    background: url("~assets/img/detail/tel.svg");
  }

  .shop-bottom {
    margin-top: 5px;
    text-align: center;
  }

  .enter-shop {
    font-size: 14px;
    line-height: 30px;
    display: inline-block;
    width: 150px;
    height: 30px;
    text-align: center;
    border-radius: 10px;
    background-color: #f2f5f8;
  }
</style>
