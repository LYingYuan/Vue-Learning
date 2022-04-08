<template>
  <div>
    <section>
      <base-card>
        <h2>{{ full_name }}</h2>
        <h3>${{ rate }}/hour</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2>Interested? Reach out now!</h2>
          <base-button link :to="contact_link">Contact</base-button>
        </header>
        <router-view></router-view>
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge
          v-for="area in areas"
          :key="area"
          :type="area"
          :title="area"
        ></base-badge>
        <p>{{ description }}</p>
      </base-card>
    </section>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selected_coach: null,
    };
  },
  computed: {
    full_name() {
      return (
        this.selected_coach.first_name + ' ' + this.selected_coach.last_name
      );
    },
    rate() {
      return this.selected_coach.hourly_rate;
    },
    contact_link() {
      return '/coaches/' + this.id + '/contact';
    },
    description() {
      return this.selected_coach.description;
    },
    areas() {
      return this.selected_coach.areas;
    },
  },
  created() {
    this.selected_coach = this.$store.getters['coaches/coaches'].find(
      (coach) => coach.id === this.id
    );
  },
};
</script>
