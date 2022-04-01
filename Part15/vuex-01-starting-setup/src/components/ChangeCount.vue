<template>
  <!--                ↓注意这里 -->
  <button @click="inc({ value: 1 })">Add one</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    // addOne() {
    //   // this.$store.commit('increase', { value: 1 });
    //   this.$store.dispatch({
    //     type: 'increase',
    //     value: 1,
    //   });
    // },
    // ...mapActions(['increase']),
    ...mapActions({
      inc: 'increase',
    }),
  },
};
</script>
