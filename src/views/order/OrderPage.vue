<template>
  <div class="wrapper">
    <TopArea/>
    <ProductList />
    <OrderView />
  </div>
</template>

<script>
import TopArea from './TopArea'
import ProductList from './ProductList'
import OrderView from './OrderView'

export default {
  name: 'OrderPage',
  components: { TopArea, ProductList, OrderView }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #eee;
}

</style>
