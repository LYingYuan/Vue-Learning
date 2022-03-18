const app = Vue.createApp({
    data() {
        return {
            key_down: "",
            confirm_down: "",
        };
    },
    methods: {
        showMessage() {
            alert("嘿嘿，你点了按钮！");
        },
        inputText(event) {
            this.key_down = event.target.value;
        },
        confirmText(event) {
            this.confirm_down = event.target.value;
        },
    },
});

app.mount("#assignment");
