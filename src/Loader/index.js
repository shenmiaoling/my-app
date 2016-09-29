import React,{ PropTypes } from 'react'
require('../../Styles/loader.css')
module.exports = React.createClass({
  getDefaultProps() {
    return {
      loadMore:'加载更多',
      nothing:'没有更多了...',
      itemListLength: 4,
      addItem: 8,
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
    let {loading} = this.props
    let load = loading
    return {
      load: load,
    }
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
  render() {
    let {loadMore, nothing, itemListLength, } = this.props
    let loadmore = loadMore
    let loadless = nothing
    let length = itemListLength
    return <div className="expertlist">
      <div className="patent-bottom">
        <div style={{marginBottom:'25px'}} className={length === 0?'loading-close':'loading'}>
      {
        this.state.load ? <div className="loader"></div> : <a href='/' onClick={(e)=>{
          e.preventDefault()
          this.setState({
            load:true
          })
        }}>{loadmore}</a>
      }
    </div>
    <div className={length?'nothing':'nothing-open'}>{loadless}</div>
    </div>
    </div>
  }
})
