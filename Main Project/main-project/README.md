# main-project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# 设计初稿

![img](README.assets/3A48CE121BA1C7AD4E6DE4BB40B925CC.jpg)

# 主要功能

## 寻找教师

### 1. 显示教师名单

### 2. 查看教师详细资料

### 3. 注册成为一位教师

### 4. 联系教师

## 交流板块

### 1. 联系教师

### 2. 查看消息

# 数据

## 数据存储

使用 Google 的 Firebase 存储数据。

## coaches

包含所有 coach 的数组

## Coach

|    Name     |  Type  |    Description     |
| :---------: | :----: | :----------------: |
|     id      |        |  教师的唯一标识符  |
| first_name  | string |      教师的名      |
|  last_name  | string |      教师的姓      |
| description | string |    教师自我介绍    |
|    rate     | number | 教师收费（每小时） |
| coach_class | array  |    教师分类标签    |

### coach_class可能选项

|   Name   |
| :------: |
| frontend |
| backend  |
|  career  |



## requests

包含所有 request 的数组

## Request

|   Name   |  Type  |     Description      |
| :------: | :----: | :------------------: |
| coach_id |        | 接受消息的教师标识符 |
| message  | string |       消息内容       |
|  email   | string |  留给教师的邮箱地址  |

# 步骤

1. 路由

# 遇到的问题

1. 教师的分类标签用怎样的方式展现？考虑标签数量特别多的情况

​	方案一：

​	适用于数量少的情况，预设所有标签，使用v-if展示标签（介于标签的切换不会很频繁，因此不使用v-show）

​	方案二：

​	使用数组结合ul展示标签（难点在于处理每个标签的样式）

​	最终方案：

​	考虑到本次每个标签样式不一样且数量少，采用方案一

2. firebase 中的数据和本地数据
