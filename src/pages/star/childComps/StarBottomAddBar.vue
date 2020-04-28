<template>
  <div class="star-bottom-add-bar">
    <div class="check-content">
      <check-button class="check-button" :isChecked="isCheckedAll"
                    @click.native="checkedAllClick"/>
      <span>全选</span>
    </div>

    <div class="total-price">

    </div>

    <div class="to-cart" @click="toCartClick">
      添加到购物车：{{checkedLength}}
    </div>

  </div>
</template>

<script>

    import CheckButton from 'components/content/checkButton/CheckButton'

    import {mapGetters} from 'vuex'

    export default {
      name: "StarBottomAddBar",
      components: {
        CheckButton
      },
      data() {
        return {
        }
      },
      computed: {
        ...mapGetters(['starGoodsList']),
        checkedLength() {
          if (this.starGoodsList !== null) {
            return this.starGoodsList.filter(item => {
              return item.isChecked
            }).length
          }else {
            return 0
          }
        },
        isCheckedAll(){
          if (this.starGoodsList !== null){
            return this.starGoodsList.length !== 0 && this.starGoodsList.filter(item => {
              return item.isChecked
            }).length ===  this.starGoodsList.length
          }
        },
      },
      methods: {
        checkedAllClick() {
          //console.log("checkedAllClick");
          if (!this.isCheckedAll) {
            for (let item of this.starGoodsList) {
              item.isChecked = true
            }
          }else{
            for (let item of this.starGoodsList) {
              item.isChecked = false
            }
          }
        },
        toCartClick() {
          //console.log("toCalculateClick");
          if(this.checkedLength === 0) {
            this.$toast.showMsg('请选择你要添加到购物车的商品')
          }else{
            this.$toast.showMsg('即将跳转到支付页面......')
          }
        }
      }
    }
</script>

<style scoped>
  .star-bottom-add-bar {

    display: flex;
    background-color: #eee;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0px;


    height: 49px;
    line-height: 49px;

    font-size: 14px;

    z-index: 1;

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

  .to-cart {
    width: 150px;
    background-color: red;
    color: #fff;
    text-align: center;

  }

</style>
