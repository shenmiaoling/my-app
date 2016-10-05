'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import validator from 'validator'
require('../../Styles/login.css');

module.exports = _react2.default.createClass({
  displayName: 'exports',
  getDefaultProps: function getDefaultProps() {
    return {
      name: '请输入邮箱',
      password: '请输入密码',
      size: 400,
      radius: 10,
      remenber: 'block',
      title: '登录',
      forgetPassword: '忘记密码',
      signIn: '去注册',
      forgetPasswordLink: '#',
      signInLink: '#'
    };
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
  getInitialState: function getInitialState() {
    return {
      login: {
        email: '',
        password: ''
      },
      open: true
    };
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
  handleClose: function handleClose() {
    this.setState({
      open: !this.state.open
    });
  },
  render: function render() {
    var _props = this.props;
    var title = _props.title;
    var name = _props.name;
    var password = _props.password;
    var size = _props.size;
    var remenber = _props.remenber;
    var radius = _props.radius;
    var forgetPassword = _props.forgetPassword;
    var signIn = _props.signIn;
    var forgetPasswordLink = _props.forgetPasswordLink;
    var signInLink = _props.signInLink;

    var char = name;
    var code = password;
    var display = remenber;
    var forget = forgetPassword;
    var signin = signIn;
    var forgetlink = forgetPasswordLink;
    var signinlink = signInLink;
    var style = {
      width: size,
      height: size,
      borderRadius: radius,
      border: '1px solid #000',
      display: 'block',
      margin: '0 auto',
      textAlign: 'center'
    };
    return _react2.default.createElement(
      'div',
      { className: this.state.open ? "login" : "close-login" },
      _react2.default.createElement(
        'div',
        { className: this.state.open ? "login-form" : "close-login-form", style: style },
        _react2.default.createElement(
          'h1',
          { className: 'login-title' },
          title
        ),
        _react2.default.createElement(
          'form',
          { onSubmit: this.handleSubmit },
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement('input', { className: 'form-control', name: 'email', placeholder: char })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement('input', { type: 'password', className: 'form-password', name: 'password', placeholder: code })
          ),
          _react2.default.createElement(
            'div',
            { className: 'login-bottom', style: { display: display } },
            _react2.default.createElement(
              'label',
              { className: 'remenber' },
              _react2.default.createElement('input', { type: 'checkbox' }),
              '记住我（公共设备上慎选）'
            )
          ),
          _react2.default.createElement(
            'button',
            { className: 'login-btn' },
            '确定登录'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'login-bottom-text' },
          _react2.default.createElement(
            'span',
            { className: 'goto-password' },
            _react2.default.createElement(
              'a',
              { href: forgetlink },
              _react2.default.createElement(
                'span',
                { className: 'forget' },
                forget
              )
            )
          ),
          _react2.default.createElement(
            'sapn',
            { className: 'goto-signin' },
            _react2.default.createElement(
              'a',
              { href: signinlink },
              signin
            )
          )
        )
      ),
      _react2.default.createElement('div', { className: this.state.open ? 'transparent' : '', onClick: this.handleClose })
    );
  }
});