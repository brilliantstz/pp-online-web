export default {
  cartGoodsListLength(state) {
    return state.cartGoodsList? state.cartGoodsList.length : 0
  },
  cartGoodsList(state) {
    return state.cartGoodsList
  },

  starGoodsListLength(state) {
    return state.starGoodsList? state.starGoodsList.length : 0
  },

  starGoodsList(state) {
    return state.starGoodsList
  }


}
