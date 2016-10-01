'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('../../Styles/loader.css');
// let source = 'http://gs-api.sparklog.com/experts?per_page=4&order_by=-priority'
module.exports = _react2.default.createClass({
  displayName: 'exports',
  getDefaultProps: function getDefaultProps() {
    return {
      loadMore: '加载更多',
      nothing: '没有更多了...',
      source: 'http://gs-api.sparklog.com/experts?per_page=4&order_by=-priority',
      itemList: []
    };
  },

  propTypes: {
    loadMore: _react.PropTypes.string.isRequired,
    nothing: _react.PropTypes.string.isRequired,
    source: _react.PropTypes.string.isRequired,
    itemList: _react.PropTypes.array.isRequired
  },
  getInitialState: function getInitialState() {
    return {
      itemList: this.props.itemList,
      loading: null,
      page: 1,
      currentExperts: []
    };
  },
  componentDidMount: function componentDidMount() {
    this.fetchExperts(this.props.source + '&page=' + this.state.page);
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (this.props.url !== nextProps.url) {
      this.fetchExperts(nextProps.url + '&page=1', false);
      this.setState({
        page: 1
      });
    }
  },
  fetchExperts: function fetchExperts(url) {
    var _this = this;

    var load = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

    _superagent2.default.get(url).end(function (error, response) {
      _this.setState({
        loading: false,
        itemList: load ? _this.state.itemList.concat(response.body) : response.body,
        page: response.body.length === 0 ? _this.state.page + 0 : _this.state.page + 1,
        currentExperts: response.body
      });
    });
  },
  render: function render() {
    var _this2 = this;

    var _props = this.props;
    var loadMore = _props.loadMore;
    var nothing = _props.nothing;

    var loadmore = loadMore;
    var loadless = nothing;
    if (this.state.itemList.length === 0) {
      return _react2.default.createElement(
        'div',
        { style: { textAlign: 'center' } },
        _react2.default.createElement('div', { className: 'loader' })
      );
    }
    return _react2.default.createElement(
      'div',
      { className: 'loader-container' },
      this.state.itemList.map(function (item, index) {
        return _react2.default.createElement(
          'div',
          { className: 'expert-container', key: index },
          _react2.default.createElement(
            'a',
            { href: '#', className: 'link' },
            _react2.default.createElement(
              'div',
              { className: 'img-bottom' },
              item.surname + (item.sex === 0 ? '先生' : '女士')
            )
          )
        );
      }),
      _react2.default.createElement(
        'div',
        { className: 'patent-bottom' },
        _react2.default.createElement(
          'div',
          { style: { marginBottom: '25px' }, className: this.state.currentExperts.length === 0 ? 'loading-close' : 'loading' },
          this.state.loading ? _react2.default.createElement('div', { className: 'loader' }) : _react2.default.createElement(
            'a',
            { href: '/', onClick: function onClick(e) {
                e.preventDefault();
                _this2.setState({
                  loading: true
                }, function () {
                  _this2.fetchExperts(_this2.props.source + '&page=' + _this2.state.page);
                });
              } },
            loadmore
          )
        ),
        _react2.default.createElement(
          'div',
          { className: this.state.currentExperts.length === 0 ? 'nothing-open' : 'nothing' },
          loadless
        )
      )
    );
  }
});