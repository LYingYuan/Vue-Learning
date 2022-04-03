import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      coaches: [
        {
          id: "lyy",
          first_name: "Yingyuan",
          last_name: "Luo",
          description: "Nothing",
          rate: 15,
          coaches_class: ["frontend", "backend", "career"],
        },
      ],
    };
  },
});

export default store;
