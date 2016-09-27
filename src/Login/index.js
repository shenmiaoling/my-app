import React,{ PropTypes, Component} from 'react'
// import validator from 'validator'
// import '../Styles/login.css'
const propTypes = {
  name: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
};
const defaultProps = {
  name: '请输入邮箱',
  password: '请输入密码',
  size: 400,
  radius: 0,
}
class Login extends Component {
  // getInitialState(){
  //   return{
  //     login: {
  //       email:'',
  //       password:'',
  //     }
  //   }
  // },
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
  render() {
    let {name, password, size, radius} = this.props
    let char = name
    let code = password
    let style = {
      width: size,
      height: size,
      borderRadius: radius
    }
    return <div className="login-form" style={ style }>
      <h1 className="login-title">登录</h1>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
        <input className="form-control" name='email' placeholder={char}/>
        </div>
        <div className="form-group">
          <input type='password' className="form-password" name='password' placeholder={code}/>
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
}

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;

export default Login;
