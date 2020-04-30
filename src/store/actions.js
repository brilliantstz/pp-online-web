
export default {

  addUserAndToken(context, payload){
    return new Promise((resolve, reject) => {
      context.commit('addUserAndToken',payload)
      resolve("登录成功！")
    })
  },

  removeUserAndToken(context, payload) {
    return new Promise((resolve, reject) => {
      context.commit('removeUserAndToken',payload)
      resolve("退出登录成功！")
    })

  },



  addToCart(context, payload) {
    return new Promise((resolve, reject) => {
      // payload 新添加的商品

      if (context.state.cartGoodsList === null) {
        payload.count = 1;
        context.commit('addToCart', payload)
        resolve('添加购物车成功')
      }else{

        let oldGoods = null

        for(let item of context.state.cartGoodsList){
          if (item.id === payload.id){
            oldGoods = item
          }
        }

        // 判断oldGoods
        if (oldGoods){
          context.commit('addCounter', oldGoods)
          resolve('当前商品数量+1')
        }else{
          payload.count = 1;
          context.commit('addToCart', payload)
          resolve('添加购物车成功')
        }
      }
    })
  },

  removeCartGoods(context, payload) {
    return new Promise((resolve, reject) => {
      context.commit('removeCartGoods',payload)
      resolve("商品移除成功！")
    })
  },



  addToStar(context, payload){
    return new Promise((resolve, reject) => {

      // payload 新添加的商品
      if (context.state.starGoodsList === null) {
        context.commit('addToStar', payload)
        resolve('商品收藏成功!')
      }else{

        let oldGoods = null

        for(let item of context.state.starGoodsList){
          if (item.id === payload.id){
            oldGoods = item
          }
        }

        // 判断oldGoods
        if (oldGoods){
          context.commit('removeFromStar', oldGoods.id)
          resolve('商品移除收藏成功!')
        }else{
          context.commit('addToStar', payload)
          resolve('商品收藏成功!')
        }

      }

    })
  },

  removeStarGoods(context, payload) {
    return new Promise((resolve, reject) => {
      context.commit('removeStarGoods',payload)
      resolve("商品移除成功！")
    })
  },

  removeFromStar(context, payload) {
    return new Promise((resolve, reject) => {
      context.commit('removeFromStar', payload)
      resolve('商品移除收藏成功!')
    })
  },


  addToAddress(context, payload) {
    return new Promise((resolve, reject) => {

      if (context.state.addressList === null) {
        context.commit('addToAddress', payload)
        resolve('地址添加成功!')
      } else {
        // payload 新添加的地址

        //判断是否设置默认
        if (payload.isDefault) {

          context.state.addressList.push(payload)

          context.commit("resetDefaultAddress", context.state.addressList)
          resolve('地址添加成功!')
        }else {
          context.commit('addToAddress', payload)
          resolve('地址添加成功!')
        }
      }
    })
  },

  updateAddress(context, payload) {
    return new Promise((resolve, reject) => {
      context.commit('updateAddress', payload)
      resolve('地址修改成功!')
    })
  },

  deleteAddress(context, payload) {
    return new Promise((resolve, reject) => {
      context.commit('deleteAddress', payload)
      resolve('地址删除成功!')
    })
  }


}
