const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: "",
            full_name: "",
            lastName: "",
        };
    },
    watch: {
        counter(value) {
            if (value > 50) {
                const that = this;
                setTimeout(function () {
                    that.counter = 0;
                }, 2000);
            }
        },
        // name(value) {
        //     if (value === "") {
        //         this.full_name = "";
        //     } else {
        //         this.full_name = value + " " + this.lastName;
        //     }
        // },
        // lastName(value) {
        //     if (value === "") {
        //         this.full_name = "";
        //     } else {
        //         this.full_name = this.name + " " + value;
        //     }
        // },
    },
    computed: {
        fullName() {
            console.log("running");
            if (this.name === "" || this.lastName === "") {
                return "";
            }
            return this.name + " " + this.lastName;
        },
    },
    methods: {
        setName(event, lastName) {
            this.name = event.target.value;
        },
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
            // this.counter--;
        },
        resetInput() {
            this.name = "";
        },
        outputFullName() {
            console.log("running");
            if (this.name === "") {
                return "";
            }
            return this.name + " Luo";
        },
    },
});

app.mount("#events");
