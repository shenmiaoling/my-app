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
      itemListLength: 4,
      addItem: 8,
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
    var loading = this.props.loading;

    var load = loading;
    return {
      load: load
    };
  },

  // componentDidMount() {
  //   let {source} = this.props
  //   let url = source
  //   this.fetchExperts(`${url}&page=${this.state.page}`)
  // },
  // componentWillReceiveProps(nextProps){
  //   let {source} = this.props
  //   let url = source
  //   if(url!==nextProps.url){
  //     this.fetchExperts(`${nextProps.url}&page=1`,false)
  //     this.setState({
  //       page: 1
  //     })
  //   }
  // },
  // fetchExperts(url,load=true){
  //   superagent.get(url).end((error, response) => {
  //     this.setState({
  //       loading: false,
  //       experts: load?this.state.experts.concat(response.body):response.body,
  //       page: response.body.length===0?this.state.page + 0:this.state.page + 1,
  //       currentExperts: response.body
  //     })
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
      { className: 'expertlist' },
      _react2.default.createElement(
        'div',
        { className: 'patent-bottom' },
        _react2.default.createElement(
          'div',
          { style: { marginBottom: '25px' }, className: length === 0 ? 'loading-close' : 'loading' },
          this.state.load ? _react2.default.createElement('div', { className: 'loader', style: { backgroundColor: 'lightgray' } }) : _react2.default.createElement(
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
      )
    );
  }
});