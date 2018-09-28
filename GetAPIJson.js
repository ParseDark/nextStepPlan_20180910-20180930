// 依赖： 1. 深拷贝 2.类型判断
// 算法： 简单递归
// 语法： getJsonValue(a, "b.e")，
// 参数1,必须为对象， 
// 参数2,为key值，暂时不支持数组
// 未来计划
//      1.兼容数组语法

function deepClone(data){
    var type = type_(data);
    var obj;
    if(type === 'array'){
        obj = [];
    } else if(type === 'object'){
        obj = {};
    } else {
        //不再具有下一层次
        return data;
    }
    if(type === 'array'){
        for(var i = 0, len = data.length; i < len; i++){
            obj.push(deepClone(data[i]));
        }
    } else if(type === 'object'){
        for(var key in data){
            obj[key] = deepClone(data[key]);
        }
    }
    return obj;
}



function type_(obj) {
    var class2type = {};
    // 生成class2type映射
    "Boolean Number String Function Array Date RegExp Object Error".split(" ").map(function(item, index) {
        class2type["[object " + item + "]"] = item.toLowerCase();
    })
    // 一箭双雕
    if (obj == null) {
        return obj + "";
    }
    return typeof obj === "object" || typeof obj === "function" ?
        class2type[Object.prototype.toString.call(obj)] || "object" :
        typeof obj;
}

function getJsonValue (a, str) {
    if(type_(a)  == "object" && str != "") {
        let obj = deepClone(a)
        let newStack = str.split(".")
        let index = newStack.shift()
        let newObj = obj[index]
        let str_ = newStack.join(".")
        if( type_(newObj)  == "undefined") {
            return false
        }else {
            return getJsonValue (newObj, str_)
        }
    }else{
        return a
    }
}


var a = {
    b: {
        c: {
            e: [1,2]
        }
    }
}

b = getJsonValue(a, "b.c.e[1]")

