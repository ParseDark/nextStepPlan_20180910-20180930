#js中的模块化
##1.模块化的历史
	1. 模块化即函数
	2. 模块化即对象
	3. 闭包，立即执行函数
	4. 函数放大模式，在一个模块里把子模块附在父模块中返回
	5. 宽放大模式
##规范
	目前通行的规范有两种AMD， commonJS.
	1. COMMONJS
		* require: 用于加载模块。
		* 但是这个规范的缺陷是，需要等。等require里的文件加载完成后才能运行接下来的代码。但是在用户端，也就是浏览器端。用户的文件不是向服务端一样时时加载的。需要发送请求和等待。在客户端的模块化，必须要异步加载，而不是同步加载。这个原因催生了AMD规范。
	2. AMD
		* require([module], callback);
		* 第一个参数[module]，是一个数组，里面的成员就是要加载的模块；第二个参数callback，则是加载成功之后的回调函数。
		* math.add()与math模块加载不是同步的，浏览器不会发生假死。所以很显然，AMD比较适合浏览器环境。

##require.js的用法
	1. 为什么我们需要模块化?
		* 实现js文件异步加载，避免文章失去响应。
		* 管理模块之间的依赖性，便于代码的维护和编写。
	2. 模块的使用：
		* require([module], callback);
		* 第一个参数[module]，是一个数组，里面的成员就是要加载的模块；第二个参数callback，则是加载成功之后的回调函数。
	3. require.config()方法，我们可以对模块的加载行为进行自定义。require.config()就写在主模块（main.js）的头部。参数就是一个对象，这个对象的paths属性指定各个模块的加载路径。
```
　　require.config({
　　　　paths: {
　　　　　　"jquery": "jquery.min",
　　　　　　"underscore": "underscore.min",
　　　　　　"backbone": "backbone.min"
　　　　}
　　});
```
	4. 定义模块
```
	define(function (){
　　　　var add = function (x,y){
　　　　　　return x+y;
　　　　};
　　　　return {
　　　　　　add: add
　　　　};
　　});
```
##ES6的模块化
1. ES6的模块化的基本规则
	* 每一个模块只加载一次， 每一个JS只执行一次， 如果下次再去加载同目录下同文件，直接从内存中读取。 一个模块就是一个单例，或者说就是一个对象；
	* 每一个模块内声明的变量都是局部变量， 不会污染全局作用域；
	* 模块内部的变量或者函数可以通过export导出；
	* 一个模块可以导入别的模块
2. 使用：
	* import 引入
	* export 导出
3. 基本语法
	* 1 export导出模块
```
//lib.js 文件
let bar = "stringBar";
let foo = "stringFoo";
let fn0 = function() {
    console.log("fn0");
};
let fn1 = function() {
    console.log("fn1");
};
export{ bar , foo, fn0, fn1}
```
	* 2 引用模块
```
import {bar,foo, fn0, fn1} from "./lib";
console.log(bar+"_"+foo);
fn0();
fn1();
```
	* 3 修改模块名称（ XX as YY）
```
let fn0 = function() {
console.log("fn0");
};
let obj0 = {}
export { fn0 as foo, obj0 as bar};
```
	* 还有很多导出的方式，目前在这里不赘述。
## 比较
ES6中的模块化都是属于引用。
	* 每一个导入的js模块都是活的， 每一次访问该模块的变量或者函数都是最新的， 这个是原生ES6模块 与AMD和CMD的区别之一












