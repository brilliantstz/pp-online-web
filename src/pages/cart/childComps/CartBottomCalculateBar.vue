<template>
  <div class="cart-bottom-calculate-bar">
    <div class="check-content">
      <check-button class="check-button" :isChecked="isCheckedAll"
                    @click.native="checkedAllClick"/>
      <span>全选</span>
    </div>

    <div class="total-price">
      合计：{{totalPrice}}
    </div>

    <div class="to-calculate" @click="toCalculateClick">
      去结算：{{checkedLength}}
    </div>

  </div>
</template>

<script>

    import CheckButton from 'components/content/checkButton/CheckButton'

    import {mapGetters} from 'vuex'

    export default {
      name: "CartBottomCalculateBar",
      components: {
        CheckButton
      },
      data() {
        return {
        }
      },
      computed: {
        ...mapGetters(['cartGoodsList']),
        totalPrice() {
          if (this.cartGoodsList !== null) {
            return '¥' + this.cartGoodsList.filter(item => {
              return item.isChecked
            }).reduce((previousValue, item) => {
              return previousValue + item.price * item.count
            },0).toFixed(2)
          }else{
            return 0
          }
        },

        checkedLength() {
          if (this.cartGoodsList !== null) {
            return this.cartGoodsList.filter(item => {
              return item.isChecked
            }).length
          }else {
            return 0
          }
        },
        isCheckedAll(){
          if (this.cartGoodsList !== null){
            return this.cartGoodsList.length !== 0 && this.cartGoodsList.filter(item => {
              return item.isChecked
            }).length ===  this.cartGoodsList.length
          }
        },
      },
      methods: {
        checkedAllClick() {
          //console.log("checkedAllClick");
          if (!this.isCheckedAll) {
            for (let item of this.cartGoodsList) {
              item.isChecked = true
            }
          }else{
            for (let item of this.cartGoodsList) {
              item.isChecked = false
            }
          }
        },
        toCalculateClick() {
          //console.log("toCalculateClick");
          if(this.checkedLength === 0) {
            this.$toast.showMsg('请选择你要购买的商品')
          }else{
            this.$toast.showMsg('即将跳转到支付页面......')
          }
        }
      }
    }
</script>

<style scoped>
  .cart-bottom-calculate-bar {

    display: flex;
    background-color: #eee;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 49px;


    height: 40px;
    line-height: 40px;

    font-size: 14px;

  }

  .check-content {
    display: flex;
    align-items: center;
    height: 40px;
    width: 80px;

    margin-left: 5px;

  }

  .check-button {
    height: 20px;
    line-height: 20px;
    width: 30px;
  }

  .total-price {
    margin-left: 20px;
    flex: 1;
  }

  .to-calculate {
    width: 100px;
    background-color: red;
    color: #fff;
    text-align: center;

  }

</style>
