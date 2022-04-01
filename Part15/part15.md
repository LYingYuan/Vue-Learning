# Vuex

管理全局状态的库

```bash
npm install --save vuex
```



## Local  State

## Global State

# store

一个app只有一个store

---

main.js

```js
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
});

app.use(store);
```

---

App.vue

```vue
<template>
  <base-container title="Vuex">
    <h3>{{ counter }}</h3>
    <button @click="addOne">Add 1</button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';

export default {
  components: {
    BaseContainer,
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
  methods: {
    addOne() {
      this.$store.state.counter++;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>

```

![image-20220331202646571](part15.assets/image-20220331202646571.png)

组件之间传递数据用这个极其方便

# mutations

---

main.js

```js
const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter += 2;
    },
  },
});
```

---

```vue
<template>
  <button @click="addOne">Add one</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      this.$store.commit('increment');
    },
  },
};
</script>
```

## 有参数

下面两种方式都可以

第二种方式：

![image-20220331213801034](part15.assets/image-20220331213801034.png)

```js
addOne() {
      // this.$store.commit('increase', { value: 1 });
      this.$store.commit({
        type: 'increase',
        value: 1,
      });
    },
```

---

main.js

```js
mutations: {
  increase(state, payload) {
    state.counter += payload.value;
  },
},
```

# Getters

获得数据，有点像computed

也可以接受两个参数，一个是state，一个是getters

可以多个getter互相依赖

---

main.js

```js
const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increase(state, payload) {
      state.counter += payload.value;
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },
  },
});
```

组件

```js
export default {
  computed: {
    counter() {
      return this.$store.getters.finalCounter;
    },
  },
};
```

## 互相依赖

```js
const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increase(state, payload) {
      state.counter += payload.value;
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 3;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if(finalCounter < 0){
        return 0;
      }
      if(finalCounter > 100){
        return 100;
      }
      return finalCounter;
    }
  },
});
```

```js
export default {
  computed: {
    counter() {
      return this.$store.getters.finalCounter;
    },
  },
};
```

# 异步 Actions

mutation是同步的，立即改变状态，所以不能将异步的操作放置于此，因为会没有效果？

如果一个是异步的，那么依赖它的都变成了异步，非常混乱。

## actions

可以使用同名，介于mutations和components之间的一个东西

组件内commit改为dispatch

```js
const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increase(state, payload) {
      state.counter += payload.value;
    },
  },
  actions: {
    increase(context, payload) {
      setTimeout(() => {
          //            ↓来自mutations
        context.commit('increase', payload);
      }, 2000);
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 3;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
  },
});
```

```js
export default {
  methods: {
    addOne() {
      // this.$store.commit('increase', { value: 1 });
      this.$store.dispatch({
        type: 'increase',
        value: 1,
      });
    },
  },
};
```

还可以在actions中改变payload

# 更简单的方式引用

## mapGetters

---

修改前

```vue
<template>
  <h3>{{ counter }}</h3>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.finalCounter;
    },
  },
};
</script>
```

---

修改后

```vue
<template>
  <h3>{{ finalCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // counter() {
    //   return this.$store.getters.finalCounter;
    // },
    ...mapGetters(['finalCounter']),
  },
};
</script>
```

## mapActions

---

修改前

```vue
<template>
  <button @click="addOne">Add one</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      // this.$store.commit('increase', { value: 1 });
      this.$store.dispatch({
        type: 'increase',
        value: 1,
      });
    },
  },
};
</script>
```

---

修改后

```vue
<template>
  <button @click="increase({ value: 1 })">Add one</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    // addOne() {
    //   // this.$store.commit('increase', { value: 1 });
    //   this.$store.dispatch({
    //     type: 'increase',
    //     value: 1,
    //   });
    // },
    ...mapActions(['increase']),
  },
};
</script>
```

注意action放在method里，并且有负载时，需要＋参数

还可以使用映射，来改变名字

```vue
<template>
  <!--                ↓注意这里 -->
  <button @click="inc({ value: 1 })">Add one</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions({
      inc: 'increase',
    }),
  },
};
</script>
```

# 模块

最后为local state，当然可以使用rootstate，rootgetters。。。访问到

在主store中

```js
const counterModule = {
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increase(state, payload) {
      state.counter += payload.value;
    },
  },
  actions: {
    increase(context, payload) {
      setTimeout(() => {
        context.commit('increase', payload);
      }, 2000);
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 3;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
  },
};

const store = createStore({
// 重点在这里
  modules: {
    number: counterModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  },
  actions: {
    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    },
  },
  getters: {
    getIsLogged(state) {
      return state.isLoggedIn;
    },
  },
});
```

# namespaced

把模块不仅仅和根store隔开还与其他模块隔开
