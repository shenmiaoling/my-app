import React from 'react'
// import validator from 'validator'
require( '../../Styles/login.css' )

module.exports = React.createClass({
  getDefaultProps() {
    return {
        name: '请输入邮箱',
        password: '请输入密码',
        size: 400,
        radius:10,
        remenber: 'block',
        title: '登录',
        forgetPassword:'忘记密码',
        signIn: '去注册',
        forgetPasswordLink: '#',
        signInLink: '#',
    }
  },
//   propTypes : {
//     title: PropTypes.string.isRequired,
//     forgetPassword: PropTypes.string.isRequired,
//     signIn: PropTypes.string.isRequired,
//     forgetPasswordLink: PropTypes.string.isRequired,
//     signInLink: PropTypes.string.isRequired,
//     remenber: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     password: PropTypes.string.isRequired,
//     size: PropTypes.number.isRequired,
//     radius: PropTypes.number.isRequired,
// },
  getInitialState(){
    return{
      login: {
        email:'',
        password:'',
      },
      open: true
    }
  },
  // handleChange1(event){
  //   const login = this.state.login
  //   login[event.target.name] = event.target.value
  //   this.setState({
  //     login: login
  //   })
  //   if(!validator.trim(login.email)){
  //     return console.log('yes')
  //   }
  // },
  handleClose(){
    this.setState({
      open: !this.state.open
    })
  },
  render() {
    let {title, name, password, size, remenber, radius, forgetPassword, signIn, forgetPasswordLink, signInLink} = this.props
    let char = name
    let code = password
    let display = remenber
    let forget = forgetPassword
    let signin = signIn
    let forgetlink = forgetPasswordLink
    let signinlink = signInLink
    let style = {
      width: size,
      height: size,
      borderRadius: radius,
      border: '1px solid #000',
      display: 'block',
      margin: '0 auto',
      textAlign: 'center'
    }
    return <div className={this.state.open?"login":"close-login"}>
      <div className={this.state.open?"login-form":"close-login-form"} style={ style }>
        <h1 className="login-title">{title}</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
          <input className="form-control" name='email' placeholder={char}/>
          </div>
          <div className="form-group">
            <input type='password' className="form-password" name='password' placeholder={code}/>
          </div>
          <div className="login-bottom" style={{display:display}}>
            <label className="remenber"><input type="checkbox"/>记住我（公共设备上慎选）</label>
          </div>
          <button className='login-btn'>确定登录</button>
        </form>
        <div className="login-bottom-text">
          <span className="goto-password">
            <a href={forgetlink}>
              <span className="forget">{forget}</span>
            </a>
          </span>
          <sapn className="goto-signin"><a href={signinlink}>{signin}</a></sapn>
        </div>
      </div>
      <div className={this.state.open?'transparent':''} onClick={this.handleClose}></div>
    </div>
  }
})
