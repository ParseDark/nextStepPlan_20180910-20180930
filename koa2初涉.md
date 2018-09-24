##koa2——入门

### 基础名词解析
	1. require: node.js 中模块引入其他模块的方法。
	2. koa2Obj.listen()函数。单参数： 监听端口号
	3. context上下文: 一次对话的请求，响应。通过在请求和相应之间，进行操作，就可以控制返回给用户的东西。context.response.body就是要发送给用户的内容。
	4. koa2Obj.use()： 在response之中加载方法。参数： 对应的方法名
	5. Koa的默认返回类型是（text/plain）,如果想返回别的内容。可以使用ctx.request.accepts判断request的header中Content-Type中，客户端想返回什么类型的数据。ctx.response.type指定返回类型。ctx.response.body制定返回内容。
	6. 网页模板，返回给用户最常见的就是网页模板。（fs:node中的文件功能模块-读：createReadStream("fileName")）
### 深入——路由
> 原生实现路由
> 原理： 使用ctx.request.path获取用户访问路径，以此作为判断分支，决定返回什么。

>koa-route模块
>koaObj.use(route.get('/', main))
>koaObj.use(route.get('/user', userInfo))
>
>静态资源处理——koa-static
>serve(path.join(_dirname))
>
>重定向
>ctx.response.redirect()方法可以发出一个302跳转，将用户导向另一个路由。
>
>
>

### 深入——中间件
> Logger
> 通过console.log 实时输出日志
```
console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
```
>_____________________________________________
>
> 中间件栈
> 多个中间件会形成一个栈结构（middle stack），以"先进后出"（first-in-last-out）的顺序执行。
> 1 最外层的中间件首先执行。
2 调用next函数，把执行权交给下一个中间件。
...
3 最内层的中间件最后执行。
4 执行结束后，把执行权交回上一层的中间件。
...
5 最外层的中间件收回执行权之后，执行next函数后面的代码。

> 异步中间件——使用async和wait(之后再写这部分)
>中间件的合成——koa-compose
```
const middlewares = compose([logger, main]);
app.use(middlewares);
```
###错误处理 ctx.throw()
1. 500
2. 404
3. 处理错误的中间件 try catch
4. error 事件监听

###Web App
> Cookies// 注意 这是服务端的cookie
> ?(服务端的cookie和客户端的cookie是分开的吗？我可以在客户端动服务端的cookie吗？)
> ctx.cookies.set('view', n);
> ctx.cookies.get('view')
















