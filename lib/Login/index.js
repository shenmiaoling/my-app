'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../Styles/login.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import validator from 'validator'


var propTypes = {
  name: _react.PropTypes.string.isRequired,
  password: _react.PropTypes.string.isRequired,
  size: _react.PropTypes.number.isRequired,
  radius: _react.PropTypes.number.isRequired
};
var defaultProps = {
  name: '请输入邮箱',
  password: '请输入密码',
  size: 400,
  radius: 0
};

var Login = function (_Component) {
  _inherits(Login, _Component);

  function Login() {
    _classCallCheck(this, Login);

    return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
  }

  _createClass(Login, [{
    key: 'render',

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
    value: function render() {
      var _props = this.props;
      var name = _props.name;
      var password = _props.password;
      var size = _props.size;
      var radius = _props.radius;

      var char = name;
      var code = password;
      var style = {
        width: size,
        height: size,
        borderRadius: radius
      };
      return _react2.default.createElement(
        'div',
        { className: 'login-form', style: style },
        _react2.default.createElement(
          'h1',
          { className: 'login-title' },
          '登录'
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
            { className: 'login-bottom' },
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
            'a',
            { href: '' },
            _react2.default.createElement(
              'span',
              { className: 'forget' },
              '忘记密码'
            )
          ),
          _react2.default.createElement(
            'sapn',
            { className: 'goto-signin' },
            '没有账号？',
            _react2.default.createElement(
              'a',
              { href: '' },
              '去注册'
            )
          )
        )
      );
    }
  }]);

  return Login;
}(_react.Component);

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;

exports.default = Login;