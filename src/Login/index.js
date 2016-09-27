import React from 'react'
// import {Link} from 'react-router'
// import superagent from 'superagent'
import validator from 'validator'
// import './styles.css'
module.exports = React.createClass({
  getInitialState(){
    return{
      login: {
        email:'',
        password:'',
      }
    }
  },
  // handleSubmit(event){
  //   superagent.post().send
  // },
  handleChange1(event){
    const login = this.state.login
    login[event.target.name] = event.target.value
    this.setState({
      login: login
    })
    if(!validator.trim(login.email)){
      return console.log('yes')
    }
  },
  render() {
    return <div className="login-form">
      <h1 className="login-title">登录</h1>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
        <input className="form-control" name='email' placeholder="请输入电子邮箱"/>
        </div>
        <div className="form-group">
          <input type='password' className="form-password" name='password' placeholder="请输入密码"/>
        </div>
        <div className="login-bottom">
          <label className="remenber"><input type="checkbox"/>记住我（公共设备上慎选）</label>
        </div>
        <button className='login-btn'>确定登录</button>
      </form>
      <div className="login-bottom-text">
        <a href="">
          <span className="forget">忘记密码</span>
        </a>
        <sapn className="goto-signin">没有账号？<a href="">去注册</a></sapn>
      </div>
    </div>
  }
})
