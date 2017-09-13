### Node & Express
-------

- [x] Express 简史
- [x] Node 生态系统
- [x] mongoDB 'NoSQL' 数据库
- [x] handleBars 模版语言 ==> 视图渲染
- [x] Express 简单的 web 服务器
- [x] Express Route
- [x] 使用 git 进行版本控制
- [x] github 项目托管
- [x] npm 包管理
- [x] 项目目录设置
- [x] Node 模块 / 如何手动加载自定义的模块
- [x] package.json 文件说明 / 依赖 / 开发依赖
- [x] 项目元数据  项目名称 / 作者 / 授权信息
- [x] web 开发四个维度 / 到达率 / 功能 / 可用性 / 审美
- [ ] 页面测试(Mocha) / 跨页浏览(Zombie.js) / 逻辑测试 / 去毛(JSHint) / 链接检查
    对去毛不得不多说一句，就是语法规则检查，团队使用能够规范代码风格，同时写代码的时候可以避免一些坑。流行的是 ESLint-Standard / Aribnb 出品的规范
- [x] JS 修改后自动重启服务器 nodemon / Grunt [插件](https://www.npmjs.org/package/grunt-nodemon)
- [ ] 页面测试 mocha (npm install --save-dev mocha) / 嵌入页面
    mocha 基于浏览器运行，一般将文件置于 public/vendor
    TDD: 测试驱动开发（首选）
    BDD: 行为驱动开发

```
    $ npm install --save-dev mocha
    $ mkdir public/vendor
    $ cp node_modules/mocha/mocha.js public/vendor
    $ cp node_modules/mocha/mocha.css public/vendor
```

- [ ] 浏览器端 Chai 断言库

```
    $ npm i -D chai
    $ cp node_modules/chai/chai.js public/vendor
```

- [ ] Grunt 实现自动化
    首先装上 Grunt 命令行以及 Grunt 本身：

```
    $ sudo npm install -g grunt-cli
    $ npm install --save-dev grunt
    $ npm install --save-dev grunt-cafe-mocha
    $ npm install --save-dev grunt-contrib-jshint
    $ npm install --save-dev grunt-exec
```

- [ ] Gruntfile.js 文件解读

```
module.exports = function(grunt) {
    // 加载插件,forEach 遍历
    [
        'grunt-cafe-mocha',
        'grunt-contrib-jshint',
        'grunt-exec',
    ].forEach(function(task){
    grunt.loadNpmTasks(task);
    });

    // 配置插件
    grunt.initConfig({
        cafemocha: {
            all: { src: 'qa/tests-*.js', options: { ui: 'tdd' }, }
        },
        jshint: {
            app: ['meadowlark.js', 'public/js/**/*.js','lib/**/*.js'],
            qa: ['Gruntfile.js', 'public/qa/**/*.js', 'qa/**/*.js'],
        },
        exec: {
            linkchecker: { cmd: 'linkchecker http://localhost:3000' }
        },
    });
    // 注册任务
    grunt.registerTask('default', ['cafemocha','jshint','exec']);
};
```

- [ ] 持续集成 Travis CI
    每次向服务器共享代码时，CI 都会运行部分或全部测试。没有消息就是最好的消息，全部通过可能什么都不会发生，如果测试失败，后果一半是更加公开。Node 最流行的就是 Travis CI。
    
    



