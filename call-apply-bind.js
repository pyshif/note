function foo(arg1, arg2) {
    console.log(this.name); // rosa.name
    console.log(arg1);
    console.log(arg2);
}

const rosa = {
    name: 'rosa',
    f: null,
};

const chris = {
    name: 'chris',
    f: null,
};

// 址參器 reference 賦值 給物件中的屬性
rosa.f = foo;
chris.f = foo;

// foo.call(rosa); // rosa
// foo.call(chris); // chris
// rosa.f(); // rosa
// chris.f(); // chris

// rosa.f.call(chris); // chris

// foo.call(rosa, 'orange', 'apple'); // rosa

// foo.apply(rosa, ['orange', 'apple']);

const foo_bind_rosa = foo.bind(rosa);

foo_bind_rosa();
