# v-on

:click

​	keyup、keydown、enter

# v-html

不建议使用，小心被攻击

# v-text

# v-bind

# v-modle

v-bind:value 和 v-on:input 的综合

双向绑定

# 28.Methods used for Data Binding

最好不要用method return的形式输出数据到html页面（使用{{}}），一旦页面上有其他事件被监听到，会重复执行method，严重影响性能。

29.Introduce Computed Properties

计算属性（计算得到的属性）可以解决28的问题，只有里面的依赖发生了变化，才会运行（在网页打开的时候会运行一次，vue就知道它在哪儿，以及它的依赖是什么）

虽然是以method的方式存在，但是将其视作data

vue检查顺序：data->computed->methods

除非一个改变需要改变整个页面所有，否则不要使用method来输出

# 30.Working with watches

```
watch:{
	name(newValue, oldValue){}
}
```

当只依赖1个的时候推荐使用watch（最好都用计算属性）

当依赖多个，可以选择使用**计算属性**

推荐使用watch的地方：

- 某个值超出范围后重置
- HTTP请求
- 计时器

# 31 比较methods、computed、watch

method：主要用于事件绑定

computed：数据绑定，非常适合派生数据

watch：用于非数据更新

# 32.
