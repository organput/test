import { useStore } from 'vuex'
import { toRefs, computed } from 'vue'

export const useCommonCartEffect = (id) => {
  const store = useStore()
  const { cartList } = toRefs(store.state)
  const changeCartItemInfo = (id, itemId, productInfo, num) => {
    store.commit('changeCartItemInfo', {
      id, itemId, productInfo, num
    })
    // console.log(cartList)
  }
  const products = computed(() => {
    const productList = cartList.value[id]?.productList
    return productList
  })
  const shopName = computed(() => {
    const name = cartList.value[id]?.shopName
    return name
  })
  const calculations = computed(() => {
    const productList = cartList.value[id]?.productList
    let total = 0
    let price = 0
    if (productList) {
      for (const i in productList) {
        total += productList[i].count
        if (productList[i].check) {
          price += (productList[i].count * productList[i].price)
        }
      }
    }
    price = price.toFixed(2)
    return { total, price }
  })
  return { cartList, changeCartItemInfo, products, shopName, calculations }
}
