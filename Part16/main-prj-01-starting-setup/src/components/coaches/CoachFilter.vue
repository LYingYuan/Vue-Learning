<template>
  <h2>Find Your Coach</h2>
  <span class="filter-option">
    <input
      id="frontend"
      name="selected_coaches"
      type="checkbox"
      value="frontend"
      checked
      @change="setFilter"
    />
    <label for="frontend">Frontend</label>
    <input
      id="backend"
      name="selected_coaches"
      type="checkbox"
      value="backend"
      checked
      @change="setFilter"
    />
    <label for="backend">Backend</label>
    <input
      id="career"
      name="selected_coaches"
      type="checkbox"
      value="career"
      checked
      @change="setFilter"
    />
    <label for="career">Career</label>
  </span>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  methods: {
    setFilter(event) {
      const input_id = event.target.id;
      const is_active = event.target.checked;
      const updated_filters = {
        ...this.filters,
        [input_id]: is_active,
      };
      this.filters = updated_filters;
      console.log(updated_filters);
      this.$emit('change-filter', updated_filters);
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
