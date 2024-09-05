<template>
  <div class="top">
    <div class="top__header">
      <div class="iconfont top__header__back"
      @click="handleBackClick"
      >&#xe601;</div>
      确认订单
    </div>
    <div class="top__receiver">
      <div class="top__receiver__title">收货地址</div>
      <div class="top__receiver__address">宣城工业大学合肥校区</div>
      <div class="top__receiver__info">
        <span class="top__receiver__info__name">张宇</span>
        <span class="top__receiver__info__name">11012010086</span>
      </div>
      <div class="iconfont top__receiver__enter">&#xe601;</div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'TopArea',
  setup () {
    const router = useRouter()
    const handleBackClick = () => {
      router.back()
    }
    return { handleBackClick }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.top {
  position: relative;
  height: 1.96rem;
  background-size: 100% 1.59rem;
  background-image: linear-gradient(0deg, rgba(0, 145, 255, 0.00) 4%, $btn-bgColor 50%);
  background-repeat: no-repeat;
  &__header {
    padding-top: .26rem;
    line-height: .24rem;
    color: $bgColor;
    text-align: center;
    position: relative;
    font-size: .16rem;
    &__back {
      position: absolute;
      left: .18rem;
      font-size: .21rem;
    }
  }
  &__receiver {
    position: absolute;
    left: .18rem;
    right: .18rem;
    bottom: 0;
    height: 1.11rem;
    background: $bgColor;
    border-radius: .04rem;
    &__title {
      line-height: .22rem;
      padding: .16rem 0 .14rem .16rem;
      font-size: .16rem;
      color: $content-fontColor;
    }
    &__address {
      padding: 0 .4rem 0 .16rem;
      font-size: .14rem;
      color: $content-fontColor;
      line-height: .2rem;
    }
    &__info {
      padding: .06rem 0 0 .16rem;
      &__name {
        line-height: .18rem;
        font-size: .12rem;
        color: $midiumColor;
        margin-right: .06rem;
      }
    }
    &__enter {
      position: absolute;
      right: .16rem;
      top: .51rem;
      color: $midiumColor;
      font-size: .16rem;
      transform: rotate(180deg);
    }
  }
}
</style>
