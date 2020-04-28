
import  LocalStorageTokenUtil  from '../localStorage/index'
const storage = new LocalStorageTokenUtil()

export default {
  addUserAndToken(state, payload){
    storage.set("userAndToken", payload)
  },

  removeUserAndToken(state, payload) {
    storage.remove("userAndToken")
  },



  addCounter(state, payload) {
    payload.count ++
    localStorage.setItem((storage.get('userAndToken') ? storage.get('userAndToken').user.username : "null") + "cartGoodsList", JSON.stringify(state.cartGoodsList))
  },

  addToCart(state, payload) {

    let cartGoodsList = []

    if (state.cartGoodsList){
      state.cartGoodsList.push(payload)
      localStorage.setItem((storage.get('userAndToken') ? storage.get('userAndToken').user.username : "null") + "cartGoodsList", JSON.stringify(state.cartGoodsList))
    } else{
      cartGoodsList.push(payload)
      state.cartGoodsList = cartGoodsList
      localStorage.setItem((storage.get('userAndToken') ? storage.get('userAndToken').user.username : "null") + "cartGoodsList", JSON.stringify(cartGoodsList))
    }
  },

  removeCartGoods(state, payload) {

    //console.log(payload)

    for(let removeId of payload){
      //console.log(removeId)
      for(let i = 0; i < state.cartGoodsList.length; i++){
        //console.log(state.cartGoodsList[i].id)
        if (removeId === state.cartGoodsList[i].id) {
          state.cartGoodsList.splice(i, 1)
        }
      }
    }

    localStorage.setItem((storage.get('userAndToken') ? storage.get('userAndToken').user.username : "null") + "cartGoodsList", JSON.stringify(state.cartGoodsList))

  },



  addToStar(state, payload) {
    let starGoodsList = []

    if (state.starGoodsList){
      state.starGoodsList.push(payload)
      localStorage.setItem((storage.get('userAndToken') ? storage.get('userAndToken').user.username : "null") + "starGoodsList", JSON.stringify(state.starGoodsList))
    } else{
      starGoodsList.push(payload)
      state.starGoodsList = starGoodsList
      localStorage.setItem((storage.get('userAndToken') ? storage.get('userAndToken').user.username : "null") + "starGoodsList", JSON.stringify(starGoodsList))
    }
  },

  removeToStar(state, payload) {
    //console.log(payload)

    for(let i = 0; i < state.starGoodsList.length; i++){
      //console.log(state.starGoodsList[i].id)
      if (payload === state.starGoodsList[i].id) {
        state.starGoodsList.splice(i, 1)
      }
    }

    localStorage.setItem((storage.get('userAndToken') ? storage.get('userAndToken').user.username : "null") + "starGoodsList", JSON.stringify(state.starGoodsList))

  },

  removeStarGoods(state, payload) {
    //console.log(payload)

    for(let removeId of payload){
      //console.log(removeId)
      for(let i = 0; i < state.starGoodsList.length; i++){
        //console.log(state.starGoodsList[i].id)
        if (removeId === state.starGoodsList[i].id) {
          state.starGoodsList.splice(i, 1)
        }
      }
    }

    localStorage.setItem((storage.get('userAndToken') ? storage.get('userAndToken').user.username : "null") + "starGoodsList", JSON.stringify(state.starGoodsList))

  }

}
