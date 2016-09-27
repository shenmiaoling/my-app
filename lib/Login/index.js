'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// require( '../Styles/login.css' )

module.exports = _react2.default.createClass({
  displayName: 'exports',
  getDefaultProps: function getDefaultProps() {
    return {
      name: '请输入邮箱',
      password: '请输入密码',
      size: 300,
      radius: 10
    };
  },

  propTypes: {
    name: _react.PropTypes.string.isRequired,
    password: _react.PropTypes.string.isRequired,
    size: _react.PropTypes.number.isRequired,
    radius: _react.PropTypes.number.isRequired
  },
  getInitialState: function getInitialState() {
    return {
      login: {
        email: '',
        password: ''
      }
    };
  },
  handleChange1: function handleChange1(event) {
    var login = this.state.login;
    login[event.target.name] = event.target.value;
    this.setState({
      login: login
    });
    if (!_validator2.default.trim(login.email)) {
      return console.log('yes');
    }
  },
  render: function render() {
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
      borderRadius: radius,
      border: '1px solid #000',
      display: 'block',
      margin: '0 auto',
      textAlign: 'center'
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
});