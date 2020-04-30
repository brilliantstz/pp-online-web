
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
      localStorage.setItem((storage.get('userAndToken')? storage.get('userAndToken').user.username : "null") + "cartGoodsList", JSON.stringify(state.cartGoodsList))
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

  removeFromStar(state, payload) {
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

  },



  addToAddress(state, payload) {
    let addressList = []

    if (state.addressList){
      state.addressList.push(payload)
      localStorage.setItem((storage.get('userAndToken') ? storage.get('userAndToken').user.username : "null") + "addressList", JSON.stringify(state.addressList))
    } else{
      addressList.push(payload)
      state.cartGoodsList = addressList
      localStorage.setItem((storage.get('userAndToken') ? storage.get('userAndToken').user.username : "null") + "addressList", JSON.stringify(addressList))
    }
  },

  resetDefaultAddress(state, payload) {
    //console.log(payload)

    for(let i = 0; i < payload.length - 1; i++) {
      if (payload[i].isDefault){
        payload[i].isDefault = false
      }
    }

    localStorage.setItem((storage.get('userAndToken') ? storage.get('userAndToken').user.username : "null") + "addressList", JSON.stringify(payload))

  },

  updateAddress(state, payload) {

    if(payload.isDefault){
      for (let i = 0; i < state.addressList.length; i++){
        //console.log(item)
        if (payload.id === state.addressList[i].id){
          //console.log(payload)
          state.addressList[i] = payload
        }else {
          if (state.addressList[i].isDefault) {
            state.addressList[i].isDefault = false
          }
        }
      }
    }else {
      for (let i = 0; i < state.addressList.length; i++){
        //console.log(item)
        if (payload.id === state.addressList[i].id){
          //console.log(payload)
          state.addressList[i] = payload
        }
      }
    }
    //console.log(state.addressList)
    localStorage.setItem((storage.get('userAndToken') ? storage.get('userAndToken').user.username : "null") + "addressList", JSON.stringify(state.addressList))
  },

  deleteAddress(state, payload) {
    //console.log(payload)

    for (let i = 0; i < state.addressList.length; i++) {
      if (payload === state.addressList[i].id) {
        state.addressList.splice(i, 1)
      }
    }

    //console.log(state.addressList)
    localStorage.setItem((storage.get('userAndToken') ? storage.get('userAndToken').user.username : "null") + "addressList", JSON.stringify(state.addressList))

  }

}
