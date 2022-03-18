const app = Vue.createApp({
    data() {
        return {
            boxA: false,
            boxB: false,
            boxC: false,
        };
    },
    computed: {
        boxAClass() {
            return { active: this.boxA };
        },
    },
    methods: {
        boxSelected(sel) {
            if (sel === "A") {
                this.boxA = !this.boxA;
            } else if (sel === "B") {
                this.boxB = !this.boxB;
            } else {
                this.boxC = !this.boxC;
            }
        },
    },
});

app.mount("#styling");
