import { createStore } from 'vuex'

const setLocalStorage = (state) => {
  const { addressList } = state
  const addressListString = JSON.stringify(addressList)
  localStorage.addressList = addressListString
}

const setLocalIndex = (state) => {
  const { index } = state
  const IndexString = JSON.stringify(index)
  localStorage.index = IndexString
}

const getLocalStorage = () => {
  try {
    return JSON.parse(localStorage.addressList)
  } catch (e) {
    return []
  }
}

const getLocalIndex = () => {
  try {
    return JSON.parse(localStorage.index)
  } catch (e) {
    return 0
  }
}

const setLocalCartStorage = (state) => {
  const { cartList } = state
  const cartListString = JSON.stringify(cartList)
  localStorage.cartList = cartListString
}

const setOrderStorage = (orderlists) => {
  const orderlistsString = JSON.stringify(orderlists)
  localStorage.orderlists = orderlistsString
}

const getLocalCartStorage = () => {
  try {
    return JSON.parse(localStorage.cartList)
  } catch (e) {
    return {}
  }
}

const getOrderStorage = () => {
  try {
    return JSON.parse(localStorage.orderlists)
  } catch (e) {
    return []
  }
}

export default createStore({
  state: {
    cartList: getLocalCartStorage(),
    orderlists: getOrderStorage() || [],
    addressList: getLocalStorage() || [],
    index: getLocalIndex() || 0
  },
  getters: {},
  mutations: {
    handleConfOrder (state, payload) {
      // const { products, shopName } = payload
      // const orderList = []
      // for (const i in products.value) {
      //   const product = products.value[i]
      //   orderList.push(product)
      // }
      // orderList.shopName = shopName
      // state.orderlists.push(orderList)
      // setOrderStorage(state.orderlists)
      const { id, isCancel } = payload
      const neworderLists = getOrderStorage()
      state.cartList[id].isCancel = isCancel
      neworderLists.push(state.cartList[id])
      state.orderlists = neworderLists
      setOrderStorage(neworderLists)
    },
    changeCartItemInfo (state, payload) {
      const { id, itemId, productInfo, num } = payload
      const shopInfo = state.cartList[id] || {
        shopName: '', productList: {}
      }
      let product = shopInfo.productList[itemId]
      if (!product) {
        product = productInfo
        product.count = 0
        product.check = 0
      }
      product.count += num
      if (num > 0) {
        product.check = true
      }
      product.count = Math.max(0, product.count)
      if (product.count === 0) {
        delete shopInfo.productList[itemId]
      } else {
        shopInfo.productList[itemId] = product
      }
      if (Object.keys(shopInfo.productList).length === 0) {
        delete state.cartList[id]
      } else {
        state.cartList[id] = shopInfo
      }
      setLocalCartStorage(state)
    },
    checkehandleClick (state, payload) {
      const { id, itemId } = payload
      const product = state.cartList[id].productList[itemId]
      product.check = !product.check
      setLocalCartStorage(state)
    },
    cleanCartProducts (state, payload) {
      const { id } = payload
      delete state.cartList[id]
      setLocalCartStorage(state)
    },
    setCartCheck (state, payload) {
      const { id, totalCheck } = payload
      const shopInfo = state.cartList[id]?.productList
      if (shopInfo) {
        for (const i in shopInfo) {
          const product = shopInfo[i]
          product.check = !totalCheck
        }
      }
      setLocalCartStorage(state)
    },
    changeShopName (state, payload) {
      const { id, shopName } = payload
      const shopInfo = state.cartList[id] || {
        shopName: '', productList: {}
      }
      shopInfo.shopName = shopName
      state.cartList[id] = shopInfo
      setLocalCartStorage(state)
    },
    handleSave (state, payload) {
      const { newAddress } = payload
      const newList = getLocalStorage() || []
      console.log(newList)
      newList.push(newAddress)
      state.addressList = newList
      setLocalStorage(state)
    },
    handleChange (state, payload) {
      const { index } = payload
      state.index = index
      setLocalIndex(state)
    },
    handleDel (state, payload) {
      const { index } = payload
      state.addressList.splice(index, 1)
      setLocalStorage(state)
    }
  },
  actions: {},
  modules: {}
})
