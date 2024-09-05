<template>
  <div class="nearby">
    <router-link v-for="item in nearbyList"
    :key="item.id"
    :to="`/shop/${item.id}`"
    >
      <ShopView :item="item" />
    </router-link>
  </div>
</template>

<script>
import { get } from '@/untils/request'
import { ref } from 'vue'
import ShopView from '../../components/ShopInfo'

const useNearbyListEffect = () => {
  const nearbyList = ref([])
  const getNearbyList = async () => {
    const res = await get('/api/shop/hot-list')
    // console.log(res.data)
    if (res?.errorno === 0 && res?.data?.length) {
      nearbyList.value = res.data
    }
  }
  return { nearbyList, getNearbyList }
}

export default {
  name: 'NearbyPage',
  components: { ShopView },
  setup () {
    const { nearbyList, getNearbyList } = useNearbyListEffect()
    getNearbyList()
    return { nearbyList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.nearby {
  padding: 0 .2rem;
  background: $bgColor;
  &__title {
    margin-top: .16rem;
    margin-bottom: .02rem;
    font-size: .18rem;
    color: $content-fontColor;
  }
  a {
    text-decoration: none;
  }
}
</style>
