const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            inputTaskValue: "",
            list: true,
        };
    },
    computed: {
        changeBtnText() {
            return this.list ? "Hide List" : "Show List";
        },
    },
    methods: {
        addTask() {
            this.tasks.push(this.inputTaskValue);
        },
        changeList() {
            this.list = !this.list;
        },
    },
});

app.mount("#assignment");
