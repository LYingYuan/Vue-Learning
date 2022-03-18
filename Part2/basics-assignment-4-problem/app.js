const app = Vue.createApp({
    data() {
        return {
            style1: "",
            btn_style: true,
            background_color: "",
        };
    },
    watch: {},
    computed: {
        paragraphClasses() {
            return {
                user1: this.style1 === "user1",
                user2: this.style1 === "user2",
                visible: this.btn_style,
                hidden: !this.btn_style,
            };
        },
        // isUser1() {
        //     if (this.style1.toLowerCase() === "user1") {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // },
        // isUser2() {
        //     if (this.style1.toLowerCase() === "user2") {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // },
    },
    methods: {
        btnStyle() {
            this.btn_style = !this.btn_style;
        },
    },
});

app.mount("#assignment");
