<template>
  <div class="order">
    <div class="order__price">实付金额 <b>&yen;{{ calculations.price }}</b></div>
    <div class="order__btn"
    @click="() => handleShowChange(true)"
    >提交订单</div>
  </div>
  <div class="mask" v-show="isShowConf"
  @click="() => handleShowChange(false)"
  >
    <div class="mask__content" @click.stop>
      <h3 class="mask__content__title">确认要离开收银台？</h3>
      <p class="mask__content__desc">请尽快完成支付，否则将被取消</p>
      <div class="mask__content__btns">
        <div class="mask__content__btn mask__content__btn--first"
        @click="() => handleConfOrder(true)"
        >取消订单</div>
        <div class="mask__content__btn mask__content__btn--last"
        @click="() => handleConfOrder(false)"
        >确认支付</div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { ref } from 'vue'
import { useCommonCartEffect } from '../../effects/cartEffects'
import { post } from '../../untils/request.js'

const useMakeOrder = (products, shopName, id) => {
  const router = useRouter()
  const store = useStore()
  const handleConfOrder = async (isCancel) => {
    const productList = []
    for (const i in products.value) {
      const product = products.value[i]
      productList.push({ id: product.id, num: product.count })
    }
    store.commit('handleConfOrder', { id, isCancel })
    try {
      const result = await post('/api/user/order', {
        addressId: 1,
        id,
        shopName: shopName.value,
        isCancel: isCancel,
        productList
      })
      // console.log(result)
      if (result?.errorno === 0) {
        if (isCancel === false) {
          store.commit('cleanCartProducts', { id })
          router.push({ name: 'OrderList' })
        } else {
          router.push({ name: 'Home' })
        }
      }
    } catch (e) {
      // changeToast('请求失败')
    }
  }
  return { handleConfOrder }
}

const useShowConf = () => {
  const isShowConf = ref(false)
  const handleShowChange = (status) => {
    isShowConf.value = status
    console.log(isShowConf.value)
  }
  return { isShowConf, handleShowChange }
}

export default {
  name: 'OrderView',
  setup () {
    const route = useRoute()
    const id = parseInt(route.params.id)
    const { calculations, shopName, products } = useCommonCartEffect(id)
    const { handleConfOrder } = useMakeOrder(products, shopName, id)
    const { isShowConf, handleShowChange } = useShowConf()
    return { isShowConf, calculations, handleConfOrder, handleShowChange }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.order {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  height: .49rem;
  align-items: center;
  background: $bgColor;
  &__price {
    flex: 1;
    text-indent: .24rem;
    font-size: .14rem;
  }
  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: .98rem;
    height: .49rem;
    background: #4fb0f9;
    color: $bgColor;
    font-size: .14rem;
  }
}
.mask {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 3rem;
    height: 1.56rem;
    background: $bgColor;
    border-radius: .04rem;
    &__title {
      font-size: .18rem;
      color: $content-fontColor;
      @include centerText;
    }
    &__desc {
      margin-top: .08rem;
      @include centerText;
      color: $content-notice-fontColor;
      font-size: .14rem;
    }
    &__btns {
      display: flex;
      margin: .24rem .4rem 0 .4rem;
    }
    &__btn {
      @include centerText;
      width: .9rem;
      height: .32rem;
      border-radius: .16rem;
      &--first {
        margin-right: .24rem;
        border: .01rem solid #4fb0f9;
        color: #4fb0f9;
      }
      &--last {
        margin-left: .24rem;
        background: #4fb0f9;
        color: $bgColor;
      }
    }
  }
}
</style>
