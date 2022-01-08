// literal obejct 字面物件
const dinner = {
    // 屬性 attribute / property
    food: 'hamburger',
    // 方法 method
    foo: function (callbackFn, thisArg = this) {
        callbackFn.call(thisArg);
    },
    // function add(a, b) {
    //     return a + b;
    // },

    // 將一個普通的函數賦值給 foo (同步)
    // foo: function (callbackFn) {
    //     // 誰呼叫 foo   this 就是誰
    //     callbackFn();
    // },

    // foo: function () {
    //     // this 取決於呼叫方式
    //     console.log(this);
    // },
};

// const img = document.querySelector('#image');
// img.addEventListern('click', function () {
//     console.log(this);

//     // this.style.color = red
// });

//
// const this = dinner;
// dinner.foo();

// dinner
//      foo -> this ?
//          callback -> console.log
// const cb = function () {
//     console.log(this.food);
// };

// dinner.foo(function () {
//     console.log(this.food); // undefined
// });
// doFirst
// dinner.foo(cb);

// cb();

// function syntax
// dinner.foo(function () {
//     console.log(this.food);
// });
// const fooCopy = dinner.foo;
// fooCopy();

// arrow function syntax
// dinner.foo(() => console.log(this.food));

const launch = {
    food: 'soup',
    // foo: function () {
    //     console.log(this);
    //     const arrow = () => {
    //         console.log(this.food);
    //     };
    //     arrow();
    // },
    foo: function () {
        // console.log(this);
        // const that = this;
        // const self = this;

        const f = function () {
            // console.log(this.food);
            console.log(that.food);
        };

        f(); // soup ?
    },
};
launch.foo();

// const name = 'rosa';

// function f() {
//     console.log(name);
// }

// launch.foo.call(dinner);

// function 中的 this 是在『運行階段，由呼叫它的物件決定』
// arrow function 中的 this 是在『定義階段，由外層 this 決定』。
//      並且，arrow function 不吃 call, apply, bind

// const name = 'rosa';

// function foo() {
//     console.log(name);
// }

// !!! 注意 !!! 在看物件中 function 的 this 時，不要以爲就是當前上下文中的物件
// 要知道那個 this 是由呼叫它的人（物件）決定

// this 指向的是物件
// const this = dinner;
