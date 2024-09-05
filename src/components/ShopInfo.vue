<template>
  <div class="shop">
    <img class="shop__img" :src="item.imgUrl">
    <div class="shop__content"
    :class="{'shop__content': true, 'shop__content--bordered': hiddenBorder ? false : true}"
    >
      <div class="shop__content__title">{{ item.title }}</div>
      <div class="shop__content__tags">
        <span class="shop__content__tag"
        v-for="( tag, index ) in item.tags"
        :key='index'
        >
          {{ tag }}
        </span>
      </div>
      <p class="shop__content__highlight">{{ item.highlight }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopView',
  props: ['item', 'hiddenBorder']
}
</script>

<style lang="scss" scoped>
@import '../style/viriables.scss';
.shop {
  display: flex;
  padding-top: .12rem;
  &__img {
    margin-right: .16rem;
    width: .56rem;
    height: .56rem;
  }
  &__content {
    flex: 1;
    padding-bottom: .12rem;
    &--bordered {
      border-bottom: .01rem solid $content-bgColor;
    }
    &__title {
      line-height: .12rem;
      font-size: .16rem;
      color: $content-fontColor;
    }
    &__tags {
      margin-top: .08rem;
      line-height: .18rem;
      font-size: .13rem;
      color: $content-fontColor;
    }
    &__tag {
      margin-right: .16rem;
    }
    &__highlight {
      margin-top: .08rem;
      line-height: .18rem;
      font-size: .13rem;
      color: $hightlight-color;
    }
  }
}
</style>
