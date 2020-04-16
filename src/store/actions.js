export default {
  addToCart(context, payload) {
    return new Promise((resolve, reject) => {
      // payload 新添加的商品
      let oldGoods = null
      for(let item of context.state.cartGoodsList){
        if (item.id === payload.id){
          oldGoods = item
        }
      }

      // 判断oldGoods
      if (oldGoods){
        //oldGoods.count += 1
        context.commit('addCounter', oldGoods)
        resolve('当前商品数量+1')
      }else{
        payload.count = 1;
        //context.state.cartcartGoodsListList.push(payload)
        context.commit('addToCart', payload)
        resolve('添加购物车成功')
      }
    })
  }
}
