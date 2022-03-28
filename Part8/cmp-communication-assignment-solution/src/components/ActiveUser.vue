<template>
  <section>
    <h2>{{ username }}</h2>
    <h3>{{ userage }} Years</h3>
    <button @click="btn"></button>
  </section>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true
    },
    userage: {
      type: Number,
      required: true
    }
  },methods: {
    btn() {
      console.log(this.username);
    }
  },
};
</script>
