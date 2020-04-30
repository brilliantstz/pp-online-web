<template>
    <div id="address-list-item">
      <div class="item left">
        <div class="receiver">
          {{address.receiver}}
        </div>
      </div>
      <div class="item center">
        <div class="address">
          <div class="top">
            <div class="top-left">
              {{address.receiver}}
            </div>
            <div class="top-right">
              {{address.phone}}
            </div>
            <div class="top-default" v-show="address.isDefault">
              默认
            </div>
          </div>
          <div class="bottom">
            {{address.area}} {{address.detail}}
          </div>
        </div>
      </div>
      <div class="item right">
        <div class="edit" @click="editClick">
          编辑
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "AddressListItem",
    props: {
      address: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      editClick() {
        this.$router.push({
          path: '/updateAddress',
          query: {
            address: this.address
          }
        })
      }
    }
  }
</script>

<style scoped>

  #address-list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 5px;
  }


   .left {
    width: 30px;
    height: 30px;
    line-height: 30px;

    background-color: #D5D5D5;
    color: #ffffff;

    font-size: 12px;
    text-align: center;

    border-radius: 50%;
  }

   .center {
     flex: 1;
     margin: 0 10px;
  }

   .top {
     display: flex;
     align-items: center;
   }

   .top-left {

   }

   .top-right {
     font-size: 12px;
     color: #D5D5D5;

     margin-left: 10px;
   }

   .top-default {
     background-color: #FFFACD;
     color: #FF6347;

     font-size: 12px;
     margin-left: 10px;
     padding: 5px 10px;
   }

   .bottom {
     font-size: 14px;

     margin-top: 5px;
   }

   .right {
    float: right;

    font-size: 14px;
    color: #D5D5D5;

    border-left: 1px solid #D5D5D5;
  }

  .edit {
    padding: 0 10px;
  }



</style>
