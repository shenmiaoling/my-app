'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('../../Styles/tabbar.css');
var TabsControl = _react2.default.createClass({
  displayName: 'TabsControl',
  getInitialState: function getInitialState() {
    return {
      currentIndex: 0
    };
  },
  getTitleItemCssClasses: function getTitleItemCssClasses(index) {
    return index === this.state.currentIndex ? "tab-title-item active" : "tab-title-item";
  },
  getContentItemCssClasses: function getContentItemCssClasses(index) {
    return index === this.state.currentIndex ? "tab-content-item active" : "tab-content-item";
  },
  render: function render() {
    var _this = this;

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
              }, className: _this.getTitleItemCssClasses(index) },
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
            { className: _this.getContentItemCssClasses(index) },
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
  getDefaultProps: function getDefaultProps() {
    return {
      item1: '红色',
      item2: '蓝色',
      item3: '黄色',
      item4: '粉红色',
      item5: '绿色',
      item6: '灰色',
      item1Content: _react2.default.createElement(
        'div',
        { className: 'red' },
        '我是红色标签页'
      ),
      item2Content: _react2.default.createElement(
        'div',
        { className: 'blue' },
        '我是蓝色标签页'
      ),
      item3Content: _react2.default.createElement(
        'div',
        { className: 'yellow' },
        '我是黄色标签页'
      ),
      item4Content: _react2.default.createElement(
        'div',
        { className: 'pink' },
        '我是粉红色标签页'
      ),
      item5Content: _react2.default.createElement(
        'div',
        { className: 'green' },
        '我是绿色标签页'
      ),
      item6Content: _react2.default.createElement(
        'div',
        { className: 'gray' },
        '我是灰色标签页'
      )
    };
  },
  render: function render() {
    var _props = this.props;
    var item1 = _props.item1;
    var item2 = _props.item2;
    var item3 = _props.item3;
    var item4 = _props.item4;
    var item5 = _props.item5;
    var item6 = _props.item6;
    var item1Content = _props.item1Content;
    var item2Content = _props.item2Content;
    var item3Content = _props.item3Content;
    var item4Content = _props.item4Content;
    var item5Content = _props.item5Content;
    var item6Content = _props.item6Content;

    var first = item1;
    var second = item2;
    var third = item3;
    var fourth = item4;
    var fifth = item5;
    var sixth = item6;
    var item1content = item1Content;
    var item2content = item2Content;
    var item3content = item3Content;
    var item4content = item4Content;
    var item5content = item5Content;
    var item6content = item6Content;
    return _react2.default.createElement(
      'div',
      { className: 'container' },
      _react2.default.createElement(
        TabsControl,
        null,
        _react2.default.createElement(
          Tab,
          { name: first },
          item1content
        ),
        _react2.default.createElement(
          Tab,
          { name: second },
          item2content
        ),
        _react2.default.createElement(
          Tab,
          { name: third },
          item3content
        ),
        _react2.default.createElement(
          Tab,
          { name: fourth },
          item4content
        ),
        _react2.default.createElement(
          Tab,
          { name: fifth },
          item5content
        ),
        _react2.default.createElement(
          Tab,
          { name: sixth },
          item6content
        )
      )
    );
  }
});