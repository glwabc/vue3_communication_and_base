<template></template>

<script setup lang="ts">
// 一.什么是Proxy：
// Proxy 对象是ES6新出的一个特性，用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如
// 属性查找、赋值、枚举、函数调用等）。
// 需要知道的是，在Vue2中双向数据绑定原理（数据劫持）采用Object.defineProperty，而在Vue3中
// 数据劫持原理采用的是Proxy代理。
// 为什么Proxy会取代Object.defineProperty：
// Object.defineProperty只能劫持对象的属性，不能监听数组。也不能对 es6 新产生的 Map,Set 这
// 些数据结构做出监听。也不能监听新增和删除操作等等。
// Proxy可以直接监听整个对象而非属性，可以监听数组的变化，具有多达13中拦截方法。
//         let p = new Proxy(target, handler);
// 其中参数 target 为包装的目标对象（可以是任何类型的对象，包括原生数组，函数(???)，甚至另一个代理）。
// 其中参数 handler 为具体操作，其实就是一个对象，其属性是当执行一个操作时定义代理的行为的函数。
// 就是说里面写各种拦截的函数。不同的拦截方法拦截的是不同的操作。

// 二.具体拦截方法：
// 1.get方法：
//  get（target, property, receiver）方法用于拦截某个属性的读取操作，可以接受三个参数，分别为目
// 标对象、属性名和 proxy 实例本身。
let obj = { name: 'jack', age: 20 }
// 给obj设置一个代理
let p = new Proxy(obj, {
  get(target: any, property: any) {
    console.log('我拦截了' + target + '读取' + property)
    console.log('它的值为' + target[property])
    // 定义你要返回的值
    return target[property]
  },
})

//读取obj的age属性看看,注意定义代理后得用代理来调用属性或方法
console.log(p.age)
console.log(obj.age)
console.log(p.name)
// 可以发现当我们想输出obj.age时被proxy代理拦截到了，并且我们可以通过代理的get方法自定义实际要
// 返回的是什么。就是说虽然你读取obj.age的值为20，但是我可以通过代理拦截，想返回多少就多少，我
// 们上面返回的是真实的值 target[property]

// 2. set方法：
//  set(target, property, value, receiver)方法用来拦截某个属性的赋值操作,四个参数依次为目标
// 对象、属性名、属性值和 Proxy 实例本身，其中最后一个参数可选。
let obj2 = { name: 'jack', age: 20 }
let p2 = new Proxy(obj2, {
  set(target: any, property, value) {
    console.log('要设置对象属性？我拦截到了~', target)
    console.log('属性', property, '要修改成' + value + '?')
    console.log('我就不给你改，我改成666')
    target[property] = 666
    return true
    // 定义 Proxy 代理对象的 set 的时候，
    // 在严格模式下，要返回 return true 。
    // 否则，会报错 ‘set’ on proxy: trap returned falsish for property ‘……’
  },
  get(target: any, property) {
    return target[property]
  },
})
//修改obj.age的值为30;
obj2.age = 55 // 没有触发set拦截
p2.age = 30
//读取obj2的age属性看看,注意定义代理后得用代理来调用属性或方法
console.log(p2.age, obj2.age)
</script>

<style scoped></style>
