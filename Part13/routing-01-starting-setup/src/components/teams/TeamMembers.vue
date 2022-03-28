<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Go to Team 2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['users', 'teams'],
  components: {
    UserItem
  },
  data() {
    return {
      teamName: '',
      members: [],
      // teamName: 'Test',
      // members: [
      //   { id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
      //   { id: 'u2', fullName: 'Max Schwarz', role: 'Engineer' },
      // ],
    };
  },
  methods: {
    loadTeamMembers(route) {
      const teamId = route.params.teamId;
      const selected_team = this.teams.find(team => team.id === teamId);
      const members = selected_team.members;
      const selected_users = [];
      for (const member of members) {
        const selected_user = this.users.find(user => user.id === member);
        selected_users.push(selected_user);
      }
      this.members = selected_users;
      this.teamName = selected_team.name;
    }
  },
  created() {
    // const teamId = this.$route.params.teamId;
    // const selected_team = this.teams.find(team => team.id === teamId );
    // const members = selected_team.members;
    // const selected_members = [];
    // !                                                    ↓这里错了，没有name只有id
    // for (const user_name of members) {
    //   const selected_member = this.users.find(user => user.name === user_name);
    //   selected_members.push(selected_member);
    // }
    // this.members = selected_members;
    // this.teamName = selected_team.name;
    this.loadTeamMembers(this.$route);
  },
  watch: {
    $route(new_route) {
      this.loadTeamMembers(new_route);
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>