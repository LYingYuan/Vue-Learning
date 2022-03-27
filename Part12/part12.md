# firebase

后端，firebase

https://firebase.google.com/

转到控制台

![image-20220327181747057](part12.assets/image-20220327181747057.png)

![image-20220327181827051](part12.assets/image-20220327181827051.png)

![image-20220327181852045](part12.assets/image-20220327181852045.png)

## 创建realtime database

![image-20220327182127019](part12.assets/image-20220327182127019.png

![image-20220327182200616](part12.assets/image-20220327182200616.png)

![image-20220327182259361](part12.assets/image-20220327182259361.png)

![image-20220327182314918](part12.assets/image-20220327182314918.png)

# 发送请求

1. axios

https://www.npmjs.com/package/axios

2. fetch

发送数据时vue都在运行，也就是这是异步的（这俩都是）

## 发送POST请求至firebase

现在fetch的链接后加上

![image-20220327183705834](part12.assets/image-20220327183705834.png)

这是发送给firebase的特定要求，surveys这个名字可以自定义，但得时json文件

```javascript
fetch('https://vue-http-demo-8ddeb-default-rtdb.firebaseio.com/surveys.json', {
        method: 'POST',
        headers: {
          // 告诉服务器我们的请求会加上json格式的数据
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          // 数据
          name: this.enteredName,
          rating: this.chosenRating,
        }),
      });
```

![image-20220327185204396](part12.assets/image-20220327185204396.png)

![image-20220327185348596](part12.assets/image-20220327185348596.png)

## 发送GET请求至firebase

```
fetch('https://vue-http-demo-8ddeb-default-rtdb.firebaseio.com/surveys.json', {
        // method: 'GET', 默认的可以不用设置
        // 没有body就不需要header来告诉服务器是什么类型的数据
        // 没有body是因为GET请求不携带数据
      });
```

```
fetch('https://vue-http-demo-8ddeb-default-rtdb.firebaseio.com/surveys.json').then((res) => {
          if(res.ok) {
            // 自带的ok
            return res.json(); // 解析JSON格式的数据
          }
        }
      ).then((data) => {
        console.log(data);
      });
```

## 处理请求错误

在fetch的所有then后添加

![image-20220327202949047](part12.assets/image-20220327202949047.png)

## 处理响应错误

![image-20220327205020454](part12.assets/image-20220327205020454.png)