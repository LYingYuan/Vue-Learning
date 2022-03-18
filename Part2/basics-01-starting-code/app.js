const app = Vue.createApp({
    data() {
        return {
            course_goal_A: "Finish the course and learn vue",
            course_goal_B: "Master vue and build amazing app!",
            vue_link: "https://vuejs.org/",
        };
    },
    methods: {
        outputGoal() {
            const random_number = Math.random();
            if (random_number < 0.5) {
                return this.course_goal_A;
            } else {
                return this.course_goal_B;
            }
        },
    },
});

app.mount("#user-goal");
