# 团队项目管理协同工作平台


## 一. 使用技术

+ Node.js v4.4.0+
+ Angular.js
+ MySQL


## 二. 项目部署

### 1.安装 Git

参考: [git-简明指南](http://www.bootcss.com/p/git-guide/)

建议使用 Git 命令行.在 Windows 下为 Git Bash.


### 2.下载代码

打开 Git Bash (Windows) 或终端(Linux),进入存放项目的目录,然后执行下面的命令进行下载:

```
$ git clone https://github.com/nodejh/team-work.git
```

下载后,项目代码会存放在 `team-work` 这个目录.然后进入该目录就可以使用各种 Git 命令.

### 3.安装 Node.js

具体安装方式参考官网: [Node.js 官网](https://nodejs.org/en/)

### 4.安装依赖包

进入  `team-work` 目录,执行 `npm install` 命令即可.

```
$ cd team-work
$ npm install
```

### 5. 修改配置信息

配置信息在 `config/config.js` 文件里面，这些信息包括：MySQL数据库信息、MondoDB数据库信息、Cookie相关信息、端口等。将配置改为你的运行环境对应值。

### 6.启动程序

```
node app.js
```

如果没有报错,则在浏览器输入 `localhsot:port`，其中 `port` 为 `config/config.js` 里面 `port` 的值，即可访问。


## 三. 目录结构

### 1. `routes/index.js`

用户相关。比如用户注册，用户登陆，周报上传，项目创建等等。

### 2. `routes/admin.js`

管理员相关，主要是针对系统管理员。如修改用户权限，修改用户资料，管理所有用户。

## 四. API Code

+ 1001 普通用户未登录
+ 1002 普通用户已登陆
+ 1003 管理员未登录
+ 1004 管理员已登陆


## 编码规范

+ JavaScript [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript/tree/master/es5)
+ CSS [Airbnb CSS / Sass Styleguide](https://github.com/airbnb/css)
+ HTML/CSS [HTML/CSS编码规范](http://codeguide.bootcss.com)
+ React [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)


## 参考资料

+ [git-简明指南](http://www.bootcss.com/p/git-guide/)
+ [React 资料](https://github.com/dingyiming/learn-Js-react)
+ [富文本编辑器 simditor](http://simditor.tower.im)
+ [BootStrap](http://www.bootcss.com)
+ [Flat UI](http://www.bootcss.com/p/flat-ui/)
+ [使用 Express + MongoDB 搭建多人博客](https://github.com/nswbmw/N-blog)
