<template>
  <div id="app">
    <ShoppingList />
    <hr />
    <ShoppingCart />
  </div>
</template>

<script>
import ShoppingList from './components/ShoppingList.vue'
import ShoppingCart from './components/ShoppingCart.vue'

import store from '@/store/index'

export default {
  name: 'App',
  components: {
    ShoppingList,
    ShoppingCart
  },
  store
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
