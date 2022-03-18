const app = Vue.createApp({
    data() {
        return {
            goals: [],
            goal: "",
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.goal);
        },
        removeGoal(index) {
            this.goals.splice(index, 1);
        },
    },
});

app.mount("#user-goals");
