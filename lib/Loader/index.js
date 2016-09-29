'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('../../Styles/loader.css');
module.exports = _react2.default.createClass({
  displayName: 'exports',
  getDefaultProps: function getDefaultProps() {
    return {
      loadMore: '加载更多',
      nothing: '没有更多了...',
      itemListLength: 2,
      loading: false
    };
  },

  propTypes: {
    loadMore: _react.PropTypes.string.isRequired,
    nothing: _react.PropTypes.string.isRequired,
    itemListLength: _react.PropTypes.number.isRequired,
    loading: _react.PropTypes.bool.isRequired
  },
  getInitialState: function getInitialState() {
    return {
      load: this.props.loading
    };
  },

  // fecthSomething(){
  //   this.setState({
  //     load: false
  //   })
  // },
  render: function render() {
    var _this = this;

    var _props = this.props;
    var loadMore = _props.loadMore;
    var nothing = _props.nothing;
    var itemListLength = _props.itemListLength;

    var loadmore = loadMore;
    var loadless = nothing;
    var length = itemListLength;

    return _react2.default.createElement(
      'div',
      { className: 'loader-container' },
      _react2.default.createElement(
        'div',
        { className: length === 0 ? 'loading-close' : 'loading' },
        this.state.load ? _react2.default.createElement('div', { className: 'loader' }) : _react2.default.createElement(
          'a',
          { href: '/', onClick: function onClick(e) {
              e.preventDefault();
              _this.setState({
                load: true
              });
            } },
          loadmore
        )
      ),
      _react2.default.createElement(
        'div',
        { className: length ? 'nothing' : 'nothing-open' },
        loadless
      )
    );
  }
});