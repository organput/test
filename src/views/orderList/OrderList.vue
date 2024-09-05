<template>
  <div class="wrapper">
    <div class="title">我的地址</div>
      <div class="create">
        <router-link :to="{ name: 'create' }">
          <span class="create__text">创建一个新地址</span>
        </router-link>
      </div>
    <div class="orders">
      <div class="order"
      v-for="(item, nowIndex) in addressList"
      :key="nowIndex">
        <div class="order__title">
          {{ item.name }}-{{ item.phone }}
          <span :class="index === nowIndex ? 'order__status--active' : 'order__status'"
          @click="() => handleChange(nowIndex)"
          >{{ index === nowIndex ? '默认地址' : '设为默认' }}</span>
        </div>
        <div class="order__content">
          <div class="order__content__price">{{ item.address }}</div>
          <div class="order__content__btns">
            <span class="order__content__del iconfont"
            @click="() => handleDel(index)"
            >&#xe67e;</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <DockerPage :dockerIndex="1"/>
</template>

<script>
import { toRefs } from 'vue'
import { useStore } from 'vuex'
import DockerPage from '../../components/Docker'

export default {
  name: 'OrderList',
  components: { DockerPage },
  setup () {
    const store = useStore()
    const { addressList, index } = toRefs(store.state)
    const handleChange = (index) => {
      store.commit('handleChange', { index })
    }
    const handleDel = (index) => {
      store.commit('handleDel', { index })
    }
    console.log(index.value)
    return { addressList, handleChange, index, handleDel }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/viriables.scss';
.wrapper {
  overflow-y: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: .5rem;
  background: rgb(248, 248, 248);
}
.create {
  margin: .12rem .2rem;
  background: rgb(176, 203, 176);
  height: .28rem;
  border-radius: .2rem;
  @include centerText;
  font-size: .14rem;
  a {
    text-decoration: none;
    color: $content-notice-fontColor;
  }
}
.title {
  font-size: .16rem;
  height: .44rem;
  @include centerText;
  background: $bgColor;
  color: $content-fontColor;
}
.order {
  margin: .16rem .18rem;
  padding: .16rem;
  background: $bgColor;
  &__title {
    margin-bottom: .16rem;
    display: flex;
    height: .22rem;
    align-items: center;
    font-size: .16rem;
    color: $content-fontColor;
  }
  &__status {
    margin-left: auto;
    font-size: .14rem;
    color: $lightColor;
    &--active {
      margin-left: auto;
      font-size: .16rem;
      color: $midiumColor;
    }
  }
  &__content {
    display: flex;
    flex-direction: row;
    &__btns {
      display: flex;
      height: .2rem;
      flex: 1;
    }
    &__btn {
      width: .7rem;
    }
    &__del {
      margin-left: auto;
      color: $hightlight-color;
    }
    &__price {
      width: 2rem;
      font-size: .14rem;
      color: $hightlight-color;
      line-height: .2rem;
      margin-bottom: .04rem;
    }
  }
}
</style>
