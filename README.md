
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
