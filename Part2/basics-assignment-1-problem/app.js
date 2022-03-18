const app = Vue.createApp({
    data() {
        return {
            name: "LYY",
            age: 20,
            img_link:
                "https://img1.baidu.com/it/u=1407750889,3441968730&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=799",
            random_number: Math.random(),
        };
    },
    methods: {
        newAge() {
            return this.age + 5;
        },
        randomNumber() {
            return Math.random();
        },
    },
});

app.mount("#assignment");
