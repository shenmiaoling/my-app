"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// require('../../Styles/tabbar.css')
var TabsControl = _react2.default.createClass({
	displayName: "TabsControl",
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

		// let this = this;
		return _react2.default.createElement(
			"div",
			null,
			_react2.default.createElement(
				"nav",
				{ className: "tab-title-items" },
				_react2.default.Children.map(this.props.children, function (element, index) {
					return _react2.default.createElement(
						"div",
						{ onClick: function onClick() {
								_this.setState({ currentIndex: index });
							}, className: _this.getTitleItemCssClasses(index) },
						element.props.name
					);
				})
			),
			_react2.default.createElement(
				"div",
				{ className: "tab-title-items" },
				_react2.default.Children.map(this.props.children, function (element, index) {
					return _react2.default.createElement(
						"div",
						{ className: _this.getContentItemCssClasses(index) },
						element
					);
				})
			)
		);
	}
});
var Tab = _react2.default.createClass({
	displayName: "Tab",
	render: function render() {
		return _react2.default.createElement(
			"div",
			null,
			this.props.children
		);
	}
});

module.exports = _react2.default.createClass({
	displayName: "exports",
	getDefaultProps: function getDefaultProps() {
		return {
			item1: '红色'
		};
	},
	render: function render() {
		var item1 = this.props.item1;

		var first = item1;
		return _react2.default.createElement(
			"div",
			{ className: "container" },
			_react2.default.createElement(
				TabsControl,
				null,
				_react2.default.createElement(
					Tab,
					{ name: first },
					_react2.default.createElement(
						"div",
						{ className: "red" },
						"我是红色标签页"
					)
				),
				_react2.default.createElement(
					Tab,
					{ name: "蓝色" },
					_react2.default.createElement(
						"div",
						{ className: "blue" },
						"我是蓝色标签页"
					)
				),
				_react2.default.createElement(
					Tab,
					{ name: "黄色" },
					_react2.default.createElement(
						"div",
						{ className: "yellow" },
						"我是黄色标签页"
					)
				)
			)
		);
	}
});