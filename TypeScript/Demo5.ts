/*
 * @Author: ge 
 * @Date: 2021-06-21 14:12:06 
 * @Last Modified by: ge
 * @Last Modified time: 2021-06-21 14:24:53
 */
// 函数参数，返回类型定义


//返回类型的注解
// function getTotal(one : number, two : number) :number {
//     return one + two
// }
// const total = getTotal(1, 2)

// void无返回值
// function sayHello() : void{
//     console.log("Hello world")
// }

// function errorFunction() : never{
//     throw new Error()
//     console.log('Hello wrold')
// }

// function forEver() : never{
//     while(true){}
//     console.log('Hello world')
// }

// function add({one, two} : {one : number, two : number}){
//     return one + two
// }

// const total = add({1, 2})

function getNumber({one} : {one : number}){
    return one
}

const one = getNumber({one:1})