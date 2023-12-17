<template>
  <!--     
    在 Vue3 中有两个非常常用的响应式 API：reactive 和 ref。它们会把我们想要追踪的数据变成响应式
    ref 可以被用来创建基本类型和引用类型的响应式。而对于引用类型，底层也是转换为 reactive 来进行
    响应式处理。
    ref 创建的响应式数据在脚本中需要使用 .value 才能访问。模板会自动添加 .value，因此不需要在模
    板中使用 .value 访问。
    注意：
    reactive 能做的 ref 也能做，并且还是用 reactive 做的
    当 ref 的参数为对象时，用的就是 reactive 方法
    在 Vue3 中，如果是把对象类型的数据弄成响应式，reactive 和 ref 都可以，
    简单来说 ref 是在 reactive 上在进行了封装进行了增强，所以在 Vue3 中 reactive 能做的，
    ref 也能做，reactive 不能做的，ref 也能做。
    个人理解ref是reactive的语法糖，如：ref(1) 就等价于 reactive({value: 1});
    -->
  <div>
    <p>{{ count }}</p>
    <button @click="increment_ref">Increment_ref</button>
    <p>{{ state.count }}</p>
    <button @click="increment_active">Increment_active</button>
  </div>
  <hr />

  <div>
    arr_ref1:{{ arr_ref1 }}
    <br />
    <button @click="pushArray">pushArray点击修改一</button>
    <br />
    <button @click="changeArrayItem">changeArrayItem点击修改二</button>
  </div>
  <hr />

  <div>
    arr_ref2:{{ arr_ref2 }}
    <br />
    <button @click="pushArray2">pushArray2点击修改一</button>
    <br />
    <button @click="changeArrayItem2">changeArrayItem2点击修改二</button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch, onMounted } from 'vue'
// 使用 ref 创建响应式引用对象
const count = ref<number>(1)
// 使用 reactive 创建响应式对象
const state = reactive<{ count: number }>({
  count: 33,
})
// 使用 increment 方法修改引用对象的值和响应式对象的属性值
const increment_ref = () => {
  count.value++ // 修改引用对象的值
  state.count++ // 修改响应式对象的属性值
}
const increment_active = () => {
  // count.value++; // 修改引用对象的值
  state.count++ // 修改响应式对象的属性值
}

// =========================================
// ref 定义数组

// 1.定义时就将数组初始化
const arr_ref1 = ref<number[]>([1, 2, 3])
watch(arr_ref1.value, () => {
  //这个时候通过直接修改和利用数组的方法修改都可以监测到
  console.log('数组变化了')
})
const pushArray = () => {
  arr_ref1.value.splice(0, 0, 19)
  // splice(index ,howmany , item1, …, itemX )
  // 1. howmany 为 0 时 不删除只添加 —— 在index位置前添加item1, …, itemX的数
  // 2. howmany > 0 删除且添加 —— 删除从index位置开始的数，howmany为删除的个数，
  //    并且在index位置前添加item1, …, itemX的数
  // 3. index <0 时 最后一个数为 -1 依次倒数第二个数为-2
}
const changeArrayItem = () => {
  arr_ref1.value[0] = 10
}

// 2.定义时未初始化数组
const arr_ref2 = ref<{ value: number }[]>([])
watch(
  //这个时候不能用.value且必须是深度监听，这种写法不仅可以监听数组本身的变化，也可以监听 数组元素的变化
  arr_ref2,
  () => {
    console.log('空数组变化了')
  },
  {
    deep: true,
  },
)
const pushArray2 = () => {
  arr_ref2.value.splice(0, 0, { value: 122 })
}
const changeArrayItem2 = () => {
  arr_ref2.value[0] = { value: 342 }
}
onMounted(() => {
  arr_ref2.value = [{ value: 5 }, { value: 2 }, { value: 3 }, { value: 4 }]
})

// ========================================================
// reactive 定义数组
let arr = reactive<number[]>([])
function change() {
  let newArr = [1, 2, 3]
  // 这样定义的会出现问题，arr = newArr 这一步使得 arr 失去了响应式的效果
  arr = newArr
}
// 解决方法:可以使用 ref 定义、使用 push 方法、数组外层嵌套一个对象
// 方法一：使用 ref
let arr1 = ref<number[]>([]) //!!
function change1() {
  let newArr = [1, 2, 3]
  arr1.value = newArr
}
// 方法二：使用push 方法
let arr2 = reactive<number[]>([])
function change2() {
  let newArr = [1, 2, 3]
  arr2.push(...newArr)
}
// 方法三：数组外层嵌套一个对象
let arr3 = reactive<{ list: number[] }>({ list: [] })
function change3() {
  let newArr = [1, 2, 3]
  arr3.list = newArr
}

// ========================================================
// 关于响应式
let arr44: number[]
const dataArray1 = reactive<any>({ arr44: [] }) // 创建一个响应式对象，其中包含一个空数组
// const dataArray2 = reactive([]); // 创建一个响应式数组
// TypeError: Assignment to constant variable.
// ES6 标准引入了新的关键字
// 使用 const 定义的常量，不能修改它的值，且定义的常量必须赋初值；
// 使用 let 定义的是变量，可以进行变量赋值操作，且不需要赋初值。
let dataArray2 = reactive<number[]>([]) // 创建一个响应式数组
dataArray1.arr44 = [1, 2, 3]
// 这样赋值后，dataArray1.arr 仍然是响应式的，因为它仍然是 reactive 对象的一部分
dataArray2 = [1, 2, 3]
// 这样赋值后，dataArray2 不再是响应式的，因为它已经被一个普通数组覆盖了

// 创建一个响应式对象（如 dataArray1），并在其中包含一个数组，直接给这个数组赋值时，
// 该数组仍然是响应式的，因为它是响应式对象的一部分。
//
// 创建一个响应式数组（如 dataArray2），并直接给它赋值一个普通数组时，它将不再是响
// 应式的，因为它已经被一个普通数组覆盖了。要保持响应式，需要在此数组基础上修改，而
// 不是用一个新数组覆盖它。

// ========================================================
// 数据类型有基本数据类型（string,number,boolean,undfined,null,symbol），
// 引用数据类型（object,array,set,map等）。
// 定义响应式数据  标注ts数据类型
const count2 = ref<number>(0)
function countClick() {
  count2.value++ // 更新数据
}

// 定义引用类型数据标注
interface TypeForm {
  name: string
  num: number
  list?: number[]
}
const formInline: TypeForm = reactive({
  name: '',
  num: 0,
})
formInline.name = 'KinHKin'
formInline.num = 100
formInline.list = [1, 2, 3, 4]

// ref 创建任何值类型的响应式，需要.value属性
// reactive 创建响应式对象或数组，不需要.value属性
// ref 复杂的类型标注 Ref类型；隐式地从它的参数中推导类型；默认深层次相应;DOM 异步更新
// reactive 复杂的类型标注 interface自定义；也是隐式地从它的参数中推导类型；默认深层次相应;DOM 异步更新

// 不推荐使用 reactive() 的泛型参数，因为处理了深层次 ref 解包的返回值与泛型参数的类型不同

// ref 被传递给函数或是从一般对象上被解构时，不会丢失响应性
const obj = {
  foo: ref(1),
  bar: ref(2),
}

// 该函数接收一个 ref
// 需要通过 .value 取值
// 但它会保持响应性
callSomeFunction(obj.foo)
function callSomeFunction(any: any) {
  //
}

// 仍然是响应式的
const { foo, bar } = obj

// 简而言之，ref() 让我们能创造一种对任意值的 “引用”，并能够在不丢失响应性的前提下传递这些引用。
// 这个功能很重要，因为它经常用于将逻辑提取到 组合函数 中。

// 当 ref 在模板中作为顶层属性被访问时，它们会被自动“解包”，所以不需要使用 .value。
// 请注意，仅当 ref 是模板渲染上下文的顶层属性时才适用自动“解包”。
</script>

<style lang="less" scoped></style>
