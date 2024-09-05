<template>
  <div class="content">
    <div class="category">
      <div
      :class="{ 'category__item': true, 'category__item--active': currentTab === category.tab }"
      v-for="category in categories"
      :key="category.id"
      @click="() => handleTabClick(category.tab)"
      >
        {{ category.name }}
      </div>
    </div>
    <div class="product">
      <div class="product__item" v-for="item in list" :key="item.id">
        <img class="product__item__img" :src="item.imgUrl">
        <div class="product__item__detail">
          <h4 class="product__item__title">{{ item.name }}</h4>
          <p class="product__item__sales">月售{{ item.sales }}件</p>
          <p class="product__item__price">
            <span class="product__item__yen">&yen;</span>{{ item.price }}
            <span class="product__item__origin">&yen;{{ item.oldPrice }}</span>
          </p>
        </div>
        <div class="product__number">
          <span
          class="product__number__minus iconfont"
          @click="() => { changeCartItem(id, item.id, item, -1, shopName) }"
          >&#xe844;</span>
          {{ getProductCartCount(id, item.id) }}
          <span
          class="product__number__plus iconfont"
          @click="() => { changeCartItem(id, item.id, item, 1, shopName) }"
          >&#xe845;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { reactive, toRefs, ref, watchEffect } from 'vue'
import { get } from '../../untils/request.js'
import { useCommonCartEffect } from '../../effects/cartEffects'

const categories = [
  { id: 1, name: '全部商品', tab: 'all' },
  { id: 2, name: '秒杀', tab: 'seckill' },
  { id: 3, name: '新鲜水果', tab: 'fruit' }
]

const useTabEffect = () => {
  const currentTab = ref(categories[0].tab)
  const handleTabClick = (tab) => {
    currentTab.value = tab
  }
  return { currentTab, handleTabClick }
}

const useCurrentListEffect = (currentTab, id) => {
  const content = reactive({ list: [] })
  const getContentData = async () => {
    const res = await get(`/api/shop/${id}`, { tab: currentTab.value })
    if (res?.errorno === 0 && res?.data?.length) {
      // console.log(res.data)
      content.list = res.data
    }
  }
  watchEffect(() => { getContentData() })
  const { list } = toRefs(content)
  return { list }
}

const useCartEffect = () => {
  const store = useStore()
  const { cartList, changeCartItemInfo } = useCommonCartEffect()
  const changeShopName = (id, shopName) => {
    store.commit('changeShopName', {
      id, shopName
    })
  }
  const changeCartItem = (id, itemId, productInfo, num, shopName) => {
    changeCartItemInfo(id, itemId, productInfo, num)
    changeShopName(id, shopName)
  }
  const getProductCartCount = (id, itemId) => {
    return cartList.value?.[id]?.productList?.[itemId]?.count || 0
  }
  return { changeCartItem, cartList, getProductCartCount }
}

export default {
  name: 'ContentPage',
  props: ['shopName'],
  setup () {
    const route = useRoute()
    const id = route.params.id
    const { currentTab, handleTabClick } = useTabEffect()
    const { list } = useCurrentListEffect(currentTab, id)
    const { changeCartItem, cartList, getProductCartCount } = useCartEffect()
    return { getProductCartCount, changeCartItem, categories, currentTab, handleTabClick, list, cartList, id }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.content {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: .5rem;
}
.category {
  overflow: scroll;
  height: 100%;
  width: .76rem;
  background: $search-bgColor;
  &__item {
    line-height: .4rem;
    text-align: center;
    font-size: .14rem;
    color: $content-fontColor;
    &--active {
      background: $bgColor;
    }
  }
}
.product {
  flex: 1;
  overflow-y: scroll;
  &__item {
    position: relative;
    display: flex;
    padding: .12rem 0;
    margin: 0 .16rem;
    border-bottom: .01rem solid $content-bgColor;
    &__detail {
      overflow: hidden;
    }
    &__img {
      width: .68rem;
      height: .68rem;
      margin-right: .16rem;
    }
    &__title {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-fontColor;
      @include ellipsis
    }
    &__sales {
      margin: .06rme 0;
      line-height: .16rem;
      font-size: .12rem;
      color: $content-fontColor;
    }
    &__price {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $hightlight-color;
    }
    &__yen {
      font-family: .12rem;
    }
    &__origin {
      margin-left: .06rem;
      line-height: .2rem;
      font-size: .12rem;
      color: $lightColor;
      text-decoration: line-through;
    }
  }
  &__number {
    position: absolute;
    right: 0;
    bottom: .12rem;
    display: flex;
    align-items: center;
    justify-content: center;
    &__minus, &__plus {
      display: inline-block;
      height: .2rem;
      width: .2rem;
      line-height: .18rem;
      font-size: .2rem;
      text-align: center;
    }
    &__minus {
      color: $midiumColor;
      margin-right: .05rem;
    }
    &__plus {
      color: $btn-bgColor;
      margin-left: .05rem;
    }
  }
}
</style>
