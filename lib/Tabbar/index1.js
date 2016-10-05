'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('../../Styles/tabbar.css');
var TabsControl = _react2.default.createClass({
  displayName: 'TabsControl',

  getInitialState: function getInitialState() {
    return { currentIndex: 0 };
  },
  getTitleItemCssClasses: function getTitleItemCssClasses(index) {
    return index === this.state.currentIndex ? "tab-title-item active" : "tab-title-item";
  },

  getContentItemCssClasses: function getContentItemCssClasses(index) {
    return index === this.state.currentIndex ? "tab-content-item active" : "tab-content-item";
  },

  render: function render() {
    var _this = this;

    var that = this;
    // let {baseWidth} = this.props;
    // let childrenLength = this.props.children.length;
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'nav',
        { className: 'tab-title-items' },
        _react2.default.Children.map(this.props.children, function (element, index) {
          return _react2.default.createElement(
            'div',
            { onClick: function onClick() {
                _this.setState({ currentIndex: index });
              }, className: that.getTitleItemCssClasses(index) },
            element.props.name
          );
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'tab-content-items' },
        _react2.default.Children.map(this.props.children, function (element, index) {
          return _react2.default.createElement(
            'div',
            { className: that.getContentItemCssClasses(index) },
            element
          );
        })
      )
    );
  }
});
var Tab = _react2.default.createClass({
  displayName: 'Tab',

  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      this.props.children
    );
  }
});
module.exports = _react2.default.createClass({
  displayName: 'exports',

  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'container' },
      _react2.default.createElement(
        TabsControl,
        null,
        _react2.default.createElement(
          Tab,
          { name: 'red' },
          _react2.default.createElement(
            'div',
            { className: 'red' },
            '我是红色的标签页'
          )
        ),
        _react2.default.createElement(
          Tab,
          { name: 'blue' },
          _react2.default.createElement(
            'div',
            { className: 'blue' },
            '我是蓝色的标签页'
          )
        ),
        _react2.default.createElement(
          Tab,
          { name: 'yellow' },
          _react2.default.createElement(
            'div',
            { className: 'yellow' },
            '我是黄色的标签页'
          )
        )
      )
    );
  }
});