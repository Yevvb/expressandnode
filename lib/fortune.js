// # node 模块的实现
// # 这里的 getFortune 函数暴露给外部作用域，同时能够访问 fortuneCookies 对象，构成了闭包
// # 1.外部的封闭函数，该函数至少会被调用一次
// # 2.封闭函数至少会返回一个内部函数，这样内部函数才能在私有作用域形成闭包

var fortuneCookies = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
];

// 暴露给全局的变量需要挂载到 exports 上面
exports.getFortune = function() {
    var idx = Math.floor(Math.random() * fortuneCookies.length);
    return fortuneCookies[idx];
};
