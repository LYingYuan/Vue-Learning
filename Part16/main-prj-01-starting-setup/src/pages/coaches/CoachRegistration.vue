<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <coach-form @submit-form="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
  components: {
    CoachForm,
  },
  methods: {
    saveData(data) {
      console.log(data);
    },
  },
};
</script>
