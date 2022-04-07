<template>
  <base-dialog :show="!!error" title="An error occurred!" @close="handleError">
    <p>{{ error }}</p>
  </base-dialog>
  <section>
    <base-card>
      <coach-filter @change-filter="setFilters"></coach-filter>
    </base-card>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline" @click="loadCoaches">Refresh</base-button>
        <base-button link to="/register" v-if="!is_coach && !is_loading"
          >Register as Coach</base-button
        >
      </div>
      <div v-if="is_loading">
        <base-spinner></base-spinner>
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
      is_loading: false,
      error: null,
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
      return !this.is_loading && this.$store.getters['coaches/hasCoach'];
    },
    is_coach() {
      return this.$store.getters['coaches/isCoach'];
    },
  },
  created() {
    this.loadCoaches();
  },
  methods: {
    setFilters(updated_filters) {
      this.active_filters = updated_filters;
    },
    async loadCoaches() {
      this.is_loading = true;
      try {
        await this.$store.dispatch('coaches/loadCoaches');
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
      this.is_loading = false;
    },
    handleError() {
      this.error = null;
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
