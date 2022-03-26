从input标签中获取数据有两种方式

1. 使用v-model双向绑定
2. @input

# 为什么不使用ref

![image-20220326103918011](part11.assets/image-20220326103918011.png)

控制台打印：

![image-20220326103943303](part11.assets/image-20220326103943303.png)

可以看到，$refs获取到的不是Number

![image-20220326104034404](part11.assets/image-20220326104034404.png)

获取到的是String，原生js中dom操作也是获取的string

![image-20220326105628286](part11.assets/image-20220326105628286.png)

# v-model修饰符

可以使用修饰符让vue强制转换类型

```
v-model.number="..."
```

```
v-model.trim="..."
// 过滤首尾空白字符
v-model.lazy="..."
// 在change事件后同步
```

![image-20220326111227074](part11.assets/image-20220326111227074.png)

# form的select

v-model同样适用于select

![image-20220326112139395](part11.assets/image-20220326112139395.png)

![image-20220326112152347](part11.assets/image-20220326112152347.png)

# 复选框checkboxes

给每一个复选框加上v-model

![image-20220326112802311](part11.assets/image-20220326112802311.png)

会出现选一个就把所有的都选了

![image-20220326113238180](part11.assets/image-20220326113238180.png)

将interest改为数组，可以解决这个问题u，但同时出现新的问题，当全选后想要取消任意一个，会导致取消全部。

我们需要给每个复选框添加value，让vue知道谁是谁。

![image-20220326113540242](part11.assets/image-20220326113540242.png)

## 只有一个选项的复选框

![image-20220326121105784](part11.assets/image-20220326121105784.png)

只用加一个v-model，并且设置初始值为false

![image-20220326121317168](part11.assets/image-20220326121317168.png)

![image-20220326121329854](part11.assets/image-20220326121329854.png)

当被选定后，confirm会自动变为true

![image-20220326121402712](part11.assets/image-20220326121402712.png)

# 单选框radio

也需要给每一个单选框加上v-model

![image-20220326112918393](part11.assets/image-20220326112918393.png)

每一个加上value

![image-20220326120442875](part11.assets/image-20220326120442875.png)

![image-20220326120545808](part11.assets/image-20220326120545808.png)

![image-20220326120557898](part11.assets/image-20220326120557898.png)

## 总结

单选框复选框都需要在每一个选项加上v-model和value

# blur

当一个元素失去焦点的时候 blur 事件被触发。不会冒泡

![image-20220326150513619](part11.assets/image-20220326150513619.png)

![image-20220326151918420](part11.assets/image-20220326151918420.png)

# 自定义组件使用v-model

下面两种写法是等价的（后面加上@update:modelValue="")

![image-20220326162304385](part11.assets/image-20220326162304385.png)

组件内

![image-20220326162554663](part11.assets/image-20220326162554663.png)

最后可以替换调本地的数据，直接使用modelValue

![image-20220326164124947](part11.assets/image-20220326164124947.png)