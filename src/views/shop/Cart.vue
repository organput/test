<template>
  <div class="mask" v-if="showCart"
  @click="showCartClick"
  ></div>
  <div class="cart">
    <div class="product" v-if="showCart">
      <div class="product__header">
        <div class="product__header__all" @click="() => setCartCheck(id, totalCheck)">
          <span class="product__header__icon iconfont"
          v-html="totalCheck ? '&#xe652;' : '&#xe667;'"
          ></span>
          全选
        </div>
        <div class="product__header__clear">
          <span @click="() => cleanCartProducts(id)">清空购物车</span>
        </div>
      </div>
      <div class="product__null" v-if="calculations.total === 0">还没有添加商品</div>
      <template v-for="item in products" :key="item.id">
        <div class="product__item" v-if="item.count > 0">
          <div class="product__item__check iconfont"
          v-html="item.check ? '&#xe652;' : '&#xe667;'"
          @click="() => checkehandleClick(id, item.id)"
          ></div>
          <img class="product__item__img" :src="item.imgUrl">
          <div class="product__item__detail">
            <h4 class="product__item__title">{{ item.name }}</h4>
            <p class="product__item__price">
              <span class="product__item__yen">&yen;</span>{{ item.price }}
              <span class="product__item__origin">&yen;{{ item.oldPrice }}</span>
            </p>
          </div>
          <div class="product__number">
            <span
            class="product__number__minus iconfont"
            @click="() => { changeCartItemInfo(id, item.id, item, -1) }"
            >&#xe844;</span>
            {{ item.count || 0 }}
            <span
            class="product__number__plus iconfont"
            @click="() => { changeCartItemInfo(id, item.id, item, 1) }"
            >&#xe845;</span>
          </div>
        </div>
      </template>
    </div>
    <div class="check">
      <div class="check__icon">
        <img src="http://www.dell-lee.com/imgs/vue3/basket.png"
        class="check__icon__img"
        @click="showCartClick"
        />
        <div class="check__icon__tag">{{ calculations.total }}</div>
      </div>
      <div class="check__info">
        总计: <span class="check__info__price">&yen;{{ calculations.price }}</span>
      </div>
      <div class="check__btn">
        <router-link :to="{ path: `/order/${id}` }">
          去结算
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from '../../effects/cartEffects'

const useCartEffect = () => {
  const route = useRoute()
  const store = useStore()
  const id = route.params.id
  const { cartList, changeCartItemInfo, products, calculations } = useCommonCartEffect(id)
  const checkehandleClick = (id, itemId) => {
    store.commit('checkehandleClick', {
      id, itemId
    })
  }
  const cleanCartProducts = (id) => {
    store.commit('cleanCartProducts', { id })
  }
  const setCartCheck = (id, totalCheck) => {
    store.commit('setCartCheck', {
      id, totalCheck
    })
  }
  const totalCheck = computed(() => {
    const productList = cartList.value[id]?.productList
    if (productList) {
      for (const i in productList) {
        if (!productList[i].check) {
          return false
        }
      }
      return true
    }
    return false
  })
  return { products, totalCheck, setCartCheck, calculations, cleanCartProducts, id, changeCartItemInfo, checkehandleClick }
}

const toggleCartEffect = () => {
  const showCart = ref(false)
  const showCartClick = () => {
    showCart.value = !showCart.value
  }
  return { showCart, showCartClick }
}

export default {
  name: 'CartPage',
  props: ['shopName'],
  setup () {
    const { showCart, showCartClick } = toggleCartEffect()
    const { totalCheck, setCartCheck, calculations, cleanCartProducts, products, id, changeCartItemInfo, checkehandleClick } = useCartEffect()
    return { showCartClick, showCart, setCartCheck, totalCheck, cleanCartProducts, calculations, products, changeCartItemInfo, id, checkehandleClick }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.mask {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: $bgColor;
}
.check {
  display: flex;
  height: .49rem;
  border-top: .01rem solid $content-bgColor;
  &__icon {
    width: .84rem;
    position: relative;
    &__img {
      display: block;
      margin: .12rem auto;
      width: .28rem;
      height: .26rem;
    }
    &__tag {
      position: absolute;
      left: .48rem;
      top: .14rem;
      padding: 0 .04rem;
      min-width: .1rem;
      height: .1rem;
      font-size: .1rem;
      text-align: center;
      background-color: $hightlight-color;
      border-radius: .05rem;
      color: $bgColor;
    }
  }
  &__info {
    display: flex;
    flex: 1;
    color: $content-fontColor;
    height: .49rem;
    font-size: .12rem;
    align-items: center;
    &__price {
      display: flex;
      color: $hightlight-color;
      font-size: .18rem;
      margin-left: .05rem;
      margin-bottom: .03rem;
    }
  }
  &__btn {
    width: .98rem;
    color: $bgColor;
    background-color: #4fb0f9;
    font-size: .14rem;
    line-height: .49rem;
    text-align: center;
    a {
      color: $bgColor;
      text-decoration: none;
    }
  }
}
.product {
  flex: 1;
  overflow-y: scroll;
  background: $bgColor;
  &__header {
    display: flex;
    height: .52rem;
    border-bottom: .01rem solid $content-bgColor;
    align-items: center;
    font-size: .14rem;
    color: $content-fontColor;
    &__all {
      display: flex;
      width: .9rem;
      text-align: left;
      align-items: center;
      font-size: .16rem;
    }
    &__icon {
      vertical-align: top;
      color: $btn-bgColor;
      font-size: .2rem;
      margin-left: .15rem;
      margin-right: .1rem;
    }
    &__clear {
      flex: 1;
      text-align: right;
      margin-right: .16rem;
    }
  }
  &__null {
    height: .3rem;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: .16rem;
    color: $lightColor;
  }
  &__item {
    position: relative;
    display: flex;
    padding: .12rem 0;
    margin: 0 .16rem;
    border-bottom: .01rem solid $content-bgColor;
    &__detail {
      overflow: hidden;
    }
    &__check {
      display: flex;
      line-height: .5rem;
      margin-right: .15rem;
      color: $btn-bgColor;
      font-size: .2rem;
    }
    &__img {
      width: .46rem;
      height: .46rem;
      margin-right: .16rem;
    }
    &__title {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-fontColor;
      @include ellipsis
    }
    &__price {
      margin: .06rem 0 0 0;
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
    bottom: .16rem;
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
