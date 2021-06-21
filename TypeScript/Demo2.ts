/*
 * @Author: ge 
 * @Date: 2021-06-21 12:52:16 
 * @Last Modified by: ge
 * @Last Modified time: 2021-06-21 15:16:26
 */

//静态类型
//自定义静态类型

let count: number = 1;

interface XiaoJiejie {
    uname: string,
    age: number
}

const xiaohong :XiaoJiejie = {
    uname: '小红',
    age: 18
}

console.log(xiaohong.uname)