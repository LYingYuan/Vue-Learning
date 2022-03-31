<template>
  <button @click="addOne">Add one</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      // this.$store.commit('increase', { value: 1 });
      this.$store.commit({
        type: 'increase',
        value: 1,
      });
    },
  },
};
</script>
