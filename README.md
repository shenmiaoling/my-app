
## 简介

<strong>my-app</strong>封装了一些是项目常用到的组件，以便快速搭建项目雏形。

## 登录框使用方法

npm install shenmiaoling/my-app --save

e.g.

```
import {Login} from 'my-app'
import 'my-app/Styles/login.css'
  <Login
    name="请输入用户名"
    password="请输入密码"
    size={400}
    radius={0}
    remenber='none'
    forgetPassword='忘记密码'
    signIn='去注册'
    forgetPasswordLink='#'
    signInLink='#'
  />
	

```
##登录框功能说明


| Property   |     type      |  Description |
|----------|:-------------:|:------:|
| name |  String | 登录账户输入框的占位符 |
| password |    Number   |   登录密码的占位符 |
| size | Number |    登录组件的大小 |
| radius |  Number | 登录组件的边框圆角 |
| remenber |    String   |   记住密码，为‘none’时不显示，为‘block’时显示 |
| forgetPassword | String |   忘记密码，为空字符串时不显示 |
| signIn |  String | 注册账号，为空字符串时不显示 |
| forgetPasswordLink |    String   |   忘记密码跳转到的链接 |
| signInLink | String |    注册账号跳转到的链接 |
## 选项卡使用方法

npm install shenmiaoling/my-app --save

e.g.

```
import {Tabbar} from 'my-app'
import 'my-app/Styles/tabbar.css'
  <Tabbar
    item1="红色"
    item2="蓝色"
    item1Content={<div></div>}
  />
	

```
##选项卡功能说明

>总共六个选项卡


| Property   |     type      |  Description |
|:----------:|:-------------:|:------:|
| item1 |  String | 导航栏的第一个菜单选项 |
| item2 |  String | 导航栏的第二个菜单选项  |
| item3 |  String | 导航栏的第三个菜单选项  |
| item4 |  String | 导航栏的第四个菜单选项  |
| item5 |  String | 导航栏的第五个菜单选项 |
| item6 |  String | 导航栏的第六个菜单选项  |
| item1Content |  React Component | 第一个菜单选项显示的内容 |
| item2Content |  React Component | 第二个菜单选项显示的内容 |
| item3Content |  React Component | 第三个菜单选项显示的内容 |
| item4Content |  React Component | 第四个菜单选项显示的内容 |
| item5Content |  React Component | 第五个菜单选项显示的内容 |
| item6Content |  React Component | 第六个菜单选项显示的内容 |
