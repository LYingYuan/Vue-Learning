<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="addOne">Add 10</button>
    <change-count></change-count>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCount from './components/ChangeCount.vue';
import FavoriteValue from './components/FavoriteValue.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCount,
    FavoriteValue,
  },

  methods: {
    addOne() {
      this.$store.commit('increase', { value: 10 });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
