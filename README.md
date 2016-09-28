
## 简介

<strong>my-app</strong>封装了一些是项目常用到的组件，以便快速搭建项目雏形。

## 使用方法

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
##功能说明


| Property   |     type      |  Description |
|----------|:-------------:|------:|
| name |  String | 登录账户输入框的占位符 |
| password |    Number   |   登录密码的占位符 |
| size | Number |    登录组件的大小 |
| radius |  Number | 登录组件的边框圆角 |
| remenber |    String   |   记住密码，为‘none’时不显示，为‘block’时显示 |
| forgetPassword | String |   忘记密码，为空字符串时不显示 |
| signIn |  String | 注册账号，为空字符串时不显示 |
| forgetPasswordLink |    String   |   忘记密码跳转到的链接 |
| signInLink | String |    注册账号跳转到的链接 |