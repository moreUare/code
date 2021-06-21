// class
class Lady{
    content = 'Hi, 帅哥';
    sayHello(){
        return this.content
    }
}

// extends
class xiaoJiejie extends Lady{
    // 重写
    sayHello(){
        return super.sayHello() + '.你好！'
    }
    sayLove(){
        return 'I love you'
    }
}


const goddess = new xiaoJiejie()
console.log(goddess.sayHello())
console.log(goddess.sayLove())