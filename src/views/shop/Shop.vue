<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back iconfont" @click="handleBackClick">&#xe601;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe62d;</span>
        <input class="search__content__input" placeholder="请输入商品名称"/>
      </div>
    </div>
    <div class="shop-view">
      <ShopView :item="item" :hiddenBorder="true" v-if="item.imgUrl"/>
    </div>
    <ContentPage :shopName="item.title" />
    <CartPage :shopName="item.title"/>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { get } from '../../untils/request.js'
import ShopView from '../../components/ShopInfo'
import ContentPage from './Content'
import CartPage from './Cart'

const useShopViewEffect = () => {
  const route = useRoute()
  const id = route.params.id
  const data = reactive({ item: {} })
  const getItemData = async () => {
    const res = await get(`/api/shop/${id}`)
    if (res) {
      data.item = res
    }
  }
  const { item } = toRefs(data)
  return { item, getItemData }
}

const useBackEffect = () => {
  const router = useRouter()
  const handleBackClick = () => {
    router.push({ name: 'Home' })
  }
  return { handleBackClick }
}

export default {
  name: 'ShopPage',
  components: { ShopView, ContentPage, CartPage },
  setup () {
    const { item, getItemData } = useShopViewEffect()
    const { handleBackClick } = useBackEffect()
    getItemData()
    return { item, handleBackClick }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wrapper {
  padding: 0 .18rem;
}
.search {
  display: flex;
  margin: .14rem 0 .04rem 0;
  padding-right: .2rem;
  &__back {
    font-size: .2rem;
    line-height: .32rem;
    width: .3rem;
    color: #B6B6B6
  }
  &__content {
    display: flex;
    flex: 1;
    background: $search-bgColor;
    border-radius: .16rem;
    &__icon {
      width: .44rem;
      text-align: center;
      margin-top: .08rem;
      color: $search-fontcolor;
    }
    &__input {
      display: block;
      width: 100%;
      padding-right: .2rem;
      border: none;
      outline: none;
      background: none;
      height: .32rem;
      color: $content-fontColor;
      font-size: .14rem;
      &::placeholder {
        color: $content-fontColor;
      }
    }
  }
}
</style>
