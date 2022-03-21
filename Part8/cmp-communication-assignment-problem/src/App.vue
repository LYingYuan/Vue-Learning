<template>
    <section>
        <user-date @user-data="addUser"></user-date>
        <active-user
        v-for="user in users"
        :key="user.name"
        :user-name="user.name"
        :user-age="user.age"
        ></active-user>
    </section>
</template>

<script>
import ActiveUser from './components/ActiveUser.vue'
import UserDate from './components/UserDate.vue'
export default {
  components: { UserDate, ActiveUser },
    data() {
        return {
            users: [],
        }
    },
    methods: {
        addUser(name, age) {
            const newUser = {
                id: new Date().toISOString(),
                name: name,
                age: age,
            };
            this.users.push(newUser);
        }
    },
}
</script>

<style>

</style>