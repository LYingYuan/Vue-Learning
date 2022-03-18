const app = Vue.createApp({
    data() {
        return {
            counter: 0,
        };
    },
    computed: {
        theCounter() {
            const num = this.counter;
            console.log(num);
            if (num < 37) {
                return "Not there yet";
            } else if (num === 37) {
                return num;
            } else {
                return "Too much!";
            }
        },
    },
    watch: {
        theCounter() {
            console.log("hello");
            setTimeout(() => {
                this.counter = 0;
            }, 5000);
        },
    },
    methods: {
        add(num) {
            this.counter += num;
        },
    },
});

app.mount("#assignment");
