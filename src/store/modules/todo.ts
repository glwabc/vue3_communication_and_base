//
//定义组合式API仓库
//
import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
//创建小仓库
let useTodoStore = defineStore('todo', () => {
  let todos = ref([
    { id: 1, title: '吃饭' },
    { id: 2, title: '睡觉' },
    { id: 3, title: '打豆豆' },
  ])
  let arr = ref([1, 2, 3, 4, 5]) // ref 相当于选项式的state

  // array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
  // reduce()函数是JavaScript中数组的一个方法，它用于将数组中的所有元素按照指定的回调函数进行累积运算，
  // 最终返回一个累积结果。reduce()方法接受两个参数：回调函数和初始值。
  // 回调函数被调用时，接收四个参数：
  // 1. 累积器（accumulator）：存储上一次回调函数的返回值，或者是初始值。在第一次调用时，若指定了初始值 init，
  //    其值则为 init，否则为数组索引为 0 的元素 arr[0]。
  // 2. 当前值（currentValue）：正在处理的当前元素。在第一次调用时，若指定了初始值 init，其值则为数组索
  //    引为 0 的元素 arr[0]，否则为 arr[1]。
  // 3. 当前索引（index）：正在处理的当前元素的索引。若指定了初始值 init，则起始索引号为 0，否则从索引 1 起始。
  // 4. 原数组（array）：调用reduce()方法的数组。
  //
  // reduce()方法不会修改原数组，它返回的是最后一次回调函数的返回值。
  // 另外，如果数组为空并且没有传入初始值，将会抛出TypeError错误。

  // 数组求和
  const total = computed(() => {
    // 相当于 选项式的getters
    return arr.value.reduce((prev, next) => {
      return prev + next
    }, 0)
  })

  // 求平均数
  const avg = computed(() => {
    // 使用reduce()函数计算了数组numbers的平均数。累加器函数在每次迭代中使用当前元素更新累加器的值。
    // 当循环结束时，累加器的值为所有元素的总和，然后我们将它除以数组的长度获得平均数。
    return arr.value.reduce((accumulator, currentValue, index, array) => {
      accumulator += currentValue
      if (index === array.length - 1) {
        return accumulator / array.length
      } else {
        return accumulator
      }
    }, 0)
  })

  // 求最大数
  const max = computed(() => {
    return arr.value.reduce(function (prev, cur) {
      return Math.max(prev, cur)
    })
  })
  //务必要返回一个对象:属性与方法可以提供给组件使用
  return {
    todos,
    arr,
    total,
    avg,
    max,
    updateTodo() {
      // 相当于 选项式的actions
      todos.value.push({ id: 4, title: '组合式API方法' })
      console.log('todos:', todos)
    },
  }
})

export default useTodoStore
