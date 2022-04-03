<template>
  <base-card>
    <h2>Request Received</h2>
    <ul>
      <request-item></request-item>
    </ul>
  </base-card>
</template>

<script>
import RequestItem from "../layout/RequestItem.vue";

export default {
  components: {
    RequestItem,
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
