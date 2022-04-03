<template>
  <base-card>
    <button>Refresh</button>
    <ul>
      <coach-item></coach-item>
    </ul>
  </base-card>
</template>

<script>
import CoachItem from "./CoachItem.vue";

export default {
  components: {
    CoachItem,
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
