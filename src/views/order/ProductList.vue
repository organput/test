<template>
  <div class="product">
    <div class="product__title">{{ shopName }}</div>
    <div class="product__wrapper">
      <div class="product__list">
        <div class="product__item" v-for="item in products" :key="item.id">
          <img class="product__item__img" :src="item.imgUrl">
          <div class="product__item__detail">
            <h4 class="product__item__title">{{ item.name }}</h4>
            <p class="product__item__price">
              <span class="product__item__singlePrice">
                <span class="product__item__yen">&yen; </span>
                {{ item.price }} × {{ item.count }}
              </span>
              <span class="product__item__totalPrice">
                <span class="product__item__yen">&yen; </span>
                {{ (item.price * item.count).toFixed(2) }}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from '../../effects/cartEffects'

export default {
  name: 'ProductList',
  setup () {
    const route = useRoute()
    const id = route.params.id
    const { products, shopName } = useCommonCartEffect(id)
    return { products, shopName }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.product {
  margin: .16rem .18rem .1rem .18rem;
  background-color: $bgColor;
  &__wrapper {
    position: absolute;
    margin: 0 .18rem;
    left: 0;
    right: 0;
    top: 2.46rem;
    bottom: .6rem;
    overflow-y: scroll;
  }
  &__title {
    padding: .16rem .16rem 0 .16rem;
    font-size: .16rem;
    color: $content-fontColor;
  }
  &__list {
    padding-bottom: .16rem;
    background: $bgColor;
  }
  &__item {
    position: relative;
    display: flex;
    padding: .16rem .16rem 0 .16rem;
    &__detail {
      flex: 1;
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
      display: flex;
      margin: .06rem 0 0 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $hightlight-color;
    }
    &__totalPrice {
      flex: 1;
      text-align: right;
      color: #000;
    }
    &__yen {
      font-size: .12rem;
    }
  }
}
</style>
