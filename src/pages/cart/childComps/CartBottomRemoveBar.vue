<template>
  <div class="cart-bottom-remove-bar">
    <div class="check-content">
      <check-button class="check-button" :isChecked="isCheckedAll"
                    @click.native="checkedAllClick"/>
      <span>全选</span>
    </div>

    <div class="total-price">
    </div>

    <div class="remove" @click="removeClick">
      移出购物车{{checkedLength}}
    </div>

  </div>
</template>

<script>

    import CheckButton from 'components/content/checkButton/CheckButton'

    import {mapGetters} from 'vuex'

    export default {
      name: "CartBottomRemoveBar",
      components: {
        CheckButton
      },
      data() {
        return {
        }
      },
      computed: {
        ...mapGetters(['cartGoodsList']),
        isCheckedAll(){
          if (this.cartGoodsList !== null){
            return this.cartGoodsList.length !== 0 && this.cartGoodsList.filter(item => {
              return item.isChecked
            }).length ===  this.cartGoodsList.length
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
        removeClick() {
          //console.log("toCalculateClick");
          if(this.checkedLength === 0) {
            this.$toast.showMsg('请选择你要移除的商品')
          }else{

            const removeGoodsList = this.cartGoodsList.filter(item => {
              return item.isChecked
            })

            const removeIds = []

            for(let item of removeGoodsList) {
              removeIds.push(item.id)
            }

            //console.log(removeIds)


            this.$store.dispatch('removeCartGoods', removeIds).then(res => {

              this.$toast.showMsg(res)

            })

          }

        }
      }
    }
</script>

<style scoped>
  .cart-bottom-remove-bar {

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

  .remove {
    width: 100px;
    background-color: red;
    color: #fff;
    text-align: center;

  }

</style>
