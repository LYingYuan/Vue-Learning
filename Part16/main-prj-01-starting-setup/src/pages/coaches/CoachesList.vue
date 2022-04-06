<template>
  <section>
    <base-card>
      <coach-filter @change-filter="setFilters"></coach-filter>
    </base-card>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/register" v-if="!is_coach"
          >Register as Coach</base-button
        >
      </div>
      <ul v-if="has_coaches">
        <coach-item
          v-for="coach in filtered_coaches"
          :key="coach.id"
          :id="coach.id"
          :first_name="coach.first_name"
          :last_name="coach.last_name"
          :areas="coach.areas"
          :rate="coach.hourly_rate"
        ></coach-item>
      </ul>
      <h3 v-else>No Coaches Found.</h3>
    </base-card>
  </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';

export default {
  components: {
    CoachItem,
    CoachFilter,
  },
  data() {
    return {
      active_filters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  computed: {
    filtered_coaches() {
      const coaches = this.$store.getters['coaches/coaches'];
      return coaches.filter((coach) => {
        if (this.active_filters.frontend && coach.areas.includes('frontend')) {
          return true;
        }
        if (this.active_filters.backend && coach.areas.includes('backend')) {
          return true;
        }
        if (this.active_filters.career && coach.areas.includes('career')) {
          return true;
        }
        return false;
      });
    },
    has_coaches() {
      return this.$store.getters['coaches/hasCoach'];
    },
    is_coach() {
      return this.$store.getters['coaches/isCoach'];
    },
  },
  methods: {
    setFilters(updated_filters) {
      this.active_filters = updated_filters;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
