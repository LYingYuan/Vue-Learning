<template>
  <base-container title="Vuex" v-if="getIsLogged">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="addOne">Add 10</button>
    <change-count></change-count>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCount from './components/ChangeCount.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';
// import { mapGetters } from 'vuex';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCount,
    FavoriteValue,
    UserAuth,
  },
  computed: {
    // ...mapGetters(['getIsLogged']),
    getIsLogged() {
      return this.$store.getters.getIsLogged;
    }
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
