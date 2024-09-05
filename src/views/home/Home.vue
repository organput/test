<template>
  <div>
    <div class="wrapper">
      <div class="topArea">
        <h2 class="topArea__title">货小二取件平台</h2>
        <div class="topArea__inputBox">
          <input class="topArea__input" placeholder="请输入取件码">
        </div>
        <div class="topArea__btnBox">
          <button class="topArea__btn">
            <span class="topArea__btn__text">取件</span>
          </button>
        </div>
      </div>
      <div class="midArea">
        <div class="midArea__titleBox">
          <div class="midArea__box"></div>
          <div class="midArea__title">
            取件设备状态
          </div>
        </div>
        <div class="midArea__cards">
          <div class="midArea__card">
            <div class="midArea__card__top">
              <span class="midArea__card__icon iconfont">&#xec50;</span>
              <div class="midArea__card__status">
                <span class="midArea__card__text">空闲</span>
              </div>
            </div>
            <div class="midArea__card__name">智能取件车</div>
          </div>
          <div class="midArea__card">
            <div class="midArea__card__top">
              <span class="midArea__card__icon iconfont">&#xe6c0;</span>
              <div class="midArea__card__status">
                <span class="midArea__card__text">空闲</span>
              </div>
            </div>
            <div class="midArea__card__name">快件配送车</div>
          </div>
        </div>
      </div>
      <div class="nearby">
        <div class="nearby__titleBox">
          <div class="nearby__box"></div>
          <div class="nearby__title">
            附件取件点
          </div>
        </div>
        <NearbyPage></NearbyPage>
      </div>
    </div>
    <DockerPage :dockerIndex="0"></DockerPage>
  </div>
</template>

<script>
import DockerPage from '../../components/Docker'
import NearbyPage from './Nearby.vue'
export default {
  name: 'HomePage',
  components: { DockerPage, NearbyPage }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.wrapper {
  overflow-y: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: .5rem;
  background: $search-bgColor;
}
.topArea {
  padding: .15rem 0;
  display: flex;
  flex-direction: column;
  &__title {
    @include centerText;
    font-size: .18rem;
  }
  &__inputBox {
    display: flex;
    justify-content: center;
    margin-top: .2rem;
  }
  &__input {
    padding-left: .15rem;
    width: 80%;
    line-height: .4rem;
    background: $search-bgColor;
    color: $search-fontcolor;
    border-radius: .16rem;
    margin-bottom: .1rem;
    outline: none;
  }
  &__btnBox {
    @include centerText;
    margin-top: .2rem;
  }
  &__btn {
    border: .01rem solid $midiumColor;
    border-radius: .04rem;
    background: $btn-bgColor;
    width: 70%;
    height: .34rem;
    &__text {
      color: #fff;
      font-size: .18rem;
    }
  }
}
.midArea {
  &__titleBox {
    display: flex;
    height: .3rem;
  }
  &__box {
    width: .05rem;
    background: rgb(127, 127, 225);
  }
  &__title {
    flex: 1;
    background: $bgColor;
    display: flex;
    align-items: center;
    padding-left: .18rem;
    font-size: .14rem;
  }
  &__cards {
    margin-top: .2rem;
    padding: 0 .12rem;
    display: flex;
  }
  &__card {
    background: $bgColor;
    padding: .1rem .2rem;
    margin-right: .12rem;
    flex: 1;
    height: 1rem;
    border-radius: .04rem;
    &__top {
      width: 100%;
      display: flex;
      height: 80%;
    }
    &__icon {
      font-size: .6rem;
    }
    &__text {
      font-size: .2rem;
      color: rgb(35, 192, 35);
    }
    &__status {
      display: flex;
      align-items: center;
      margin-left: .2rem;
    }
    &__name {
      @include centerText;
      font-size: .16rem;
    }
  }
}
.nearby {
  margin-top: .25rem;
  &__titleBox {
    display: flex;
    height: .3rem;
  }
  &__box {
    width: .05rem;
    background: rgb(127, 127, 225);
  }
  &__title {
    flex: 1;
    background: $bgColor;
    display: flex;
    align-items: center;
    padding-left: .18rem;
    font-size: .14rem;
  }
}
</style>
