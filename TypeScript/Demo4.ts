/*
 * @Author: ge 
 * @Date: 2021-06-21 13:58:12 
 * @Last Modified by: ge
 * @Last Modified time: 2021-06-21 14:09:45
 */

//type annotation 类型注释
//type inference  类型推断

// let count : number;
// count = 123;

// let countInference = 123
// console.log(countInference)


//如果 TS 能够自动分析变量类型， 我们就什么也不需要做了
// const one = 1
// const two = 2
// const three = one + two;


//如果 TS 无法分析变量类型的话， 我们就需要使用类型注解
function getTotal(one : number, two : number){
    return one + two
}
const total = getTotal(1, 2)

const XiaoJiejie = {
    name: '刘英',
    age: 18
}