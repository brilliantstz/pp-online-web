
import LocalStorageUtil from '../localStorage/index'

const storage = new LocalStorageUtil()

export default  {

  token: storage.get('userAndToken') ? storage.get('userAndToken') : {token: "null"},

  cartGoodsList: localStorage.getItem((storage.get('userAndToken') ? storage.get('userAndToken').user.username : "null") + "cartGoodsList") ?
                  JSON.parse(localStorage.getItem((storage.get('userAndToken') ? storage.get('userAndToken').user.username : "null") + "cartGoodsList"))
                  : [],
  starGoodsList: localStorage.getItem((storage.get('userAndToken') ? storage.get('userAndToken').user.username : "null") + "starGoodsList") ?
                  JSON.parse(localStorage.getItem((storage.get('userAndToken') ? storage.get('userAndToken').user.username : "null") + "starGoodsList"))
                  : [],
  addressList: localStorage.getItem((storage.get('userAndToken') ? storage.get('userAndToken').user.username : "null") + "addressList") ?
                JSON.parse(localStorage.getItem((storage.get('userAndToken') ? storage.get('userAndToken').user.username : "null") + "addressList"))
                : []
}
