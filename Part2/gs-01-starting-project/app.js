Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: "",
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
            this.enteredValue = "";
        },
    },
}).mount("#app");
// const buttonEL = document.querySelector("button");
// const inputEL = document.querySelector("input");
// const listEL = document.querySelector("ul");

// function addGoal() {
//     const entered_value = inputEL.value;
//     const list_item = document.createElement("li");
//     list_item.textContent = entered_value;
//     listEL.appendChild(list_item);
//     inputEL.value = "";
// }

// buttonEL.addEventListener("click", addGoal);
