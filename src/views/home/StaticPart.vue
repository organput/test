<template>
  <div class="position">
    <span class="iconfont position__icon">&#xe61f;</span>
    翻斗花园5栋3单元牛爷爷家隔壁的楼上左手第一间
    <span class="iconfont position__notice">&#xe63f;</span>
  </div>
  <div class="search">
    <span class="iconfont">&#xe62d;</span>
    <span class="search__text">
      优惠产品
    </span>
  </div>
  <div class="banner">
    <img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg">
  </div>
  <div class="icons">
    <div class="icons__item"
    v-for="item in iconList"
    :key="item.iconDesc"
    >
      <img class="icons__item__img" :src= "`http://www.dell-lee.com/imgs/vue3/${item.iconDesc}.png`"/>
      <p class="icons__item__desc">{{ item.iconTitle }}</p>
    </div>
  </div>
  <div class="gap"></div>
</template>

<script>
export default {
  name: 'StaticPart',
  setup () {
    const iconList = [
      { iconDesc: '超市', iconTitle: '超市便利' },
      { iconDesc: '菜市场', iconTitle: '菜市场' },
      { iconDesc: '水果店', iconTitle: '水果店' },
      { iconDesc: '鲜花', iconTitle: '鲜花绿植' },
      { iconDesc: '医药健康', iconTitle: '医药健康' },
      { iconDesc: '家居', iconTitle: '家居时尚' },
      { iconDesc: '蛋糕', iconTitle: '蛋糕烘培' },
      { iconDesc: '签到', iconTitle: '签到' },
      { iconDesc: '大牌免运', iconTitle: '大牌免运' },
      { iconDesc: '红包', iconTitle: '红包套餐' }
    ]
    return { iconList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.position {
  position: relative;
  padding: .16rem .24rem .16rem 0;
  font-size: .16rem;
  line-height: .22rem;
  @include ellipsis;
  &__icon {
    font-size: .2rem;
    margin-right: .08rem;
  }
  &__notice {
    font-size: .2rem;
    position: absolute;
    right: 0;
    top: .17rem;
  }
  color: $content-fontColor;
}
.search {
  line-height: .32rem;
  background: $search-bgColor;
  color: $search-fontcolor;
  border-radius: .16rem;
  margin-bottom: .1rem;
  .iconfont {
    display: inline-block;
    padding: 0 .12rem 0 .16rem;
    font-size: .18rem;
  }
  &__text {
    font-size: .14rem;
    display: inline-block;
  }
}
.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  &__img {
    width: 100%;
  }
}
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: .16rem;
  &__item {
    width: 20%;
    &__img {
      display: block;
      margin: 0 auto;
      width: .4rem;
      height: .4rem;
    }
    &__desc {
      margin: .06rem 0 .16rem 0;
      text-align: center;
      color: $content-fontColor;
    }
  }
}
.gap {
  margin: 0 -.18rem;
  height: .1rem;
  background-color: $content-bgColor;
}
</style>
