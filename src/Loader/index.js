import React,{ PropTypes } from 'react'
require('../../Styles/loader.css')
module.exports = React.createClass({
  getDefaultProps() {
    return {
      loadMore:'加载更多',
      nothing:'没有更多了...',
      itemListLength: 2,
      loading:false
    }
  },
  propTypes : {
    loadMore: PropTypes.string.isRequired,
    nothing: PropTypes.string.isRequired,
    itemListLength: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
  },
  getInitialState() {
    return {
      load: this.props.loading,
    }
  },
  render() {
    let {loadMore, nothing, itemListLength } = this.props
    let loadmore = loadMore
    let loadless = nothing
    let length = itemListLength
    // let load = loading
    return <div className="expertlist">
      <div className="patent-bottom">
        <div style={{marginBottom:'25px'}} className={length === 0?'loading-close':'loading'}>
      {
        this.state.load ? <div className="loader"></div> : <a href='/' onClick={(e)=>{
          e.preventDefault()
          this.setState({
            load: true
          })
        }}>{loadmore}</a>
      }
    </div>
    <div className={length?'nothing':'nothing-open'}>{loadless}</div>
    </div>
    </div>
  }
})
