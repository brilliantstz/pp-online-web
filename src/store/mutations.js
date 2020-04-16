export default {
  addCounter(state, payload) {
    payload.count ++
  },
  addToCart(state, payload) {
    state.cartGoodsList.push(payload)
  }
}
