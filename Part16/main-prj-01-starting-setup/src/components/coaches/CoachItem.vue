<template>
  <li>
    <h3>{{ full_name }}</h3>
    <h4>${{ rate }}/hour</h4>
    <div>
      <base-badge
        v-for="area in areas"
        :key="area"
        :title="area"
        :type="area"
      ></base-badge>
    </div>
    <div class="actions">
      <base-button mode="outline" link :to="coach_contact_link"
        >Contact</base-button
      >
      <base-button link :to="coach_details_link">View Details</base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'first_name', 'last_name', 'areas', 'rate'],
  computed: {
    // 教师全名
    full_name() {
      return this.first_name + ' ' + this.last_name;
    },
    // 联系教师的页面链接
    coach_contact_link() {
      // 将'/coaches/'替换
      return this.$route.path + '/' + this.id + '/contact';
    },
    // 教师的详情页面链接
    coach_details_link() {
      return this.$route.path + '/' + this.id;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
