import React,{ PropTypes } from 'react'
import superagent from 'superagent'
require('../../Styles/loader.css')
// let source = 'http://gs-api.sparklog.com/experts?per_page=4&order_by=-priority'
module.exports = React.createClass({
  getDefaultProps() {
    return {
      loadMore:'加载更多',
      nothing:'没有更多了...',
      source:'http://gs-api.sparklog.com/experts?per_page=4&order_by=-priority',
      itemList: []
    }
  },
  propTypes : {
    loadMore: PropTypes.string.isRequired,
    nothing: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    itemList: PropTypes.array.isRequired,
  },
  getInitialState() {
    return {
      itemList: this.props.itemList,
      loading: null,
      page: 1,
      currentExperts:[]
    }
  },
  componentDidMount() {
    this.fetchExperts(`${this.props.source}&page=${this.state.page}`)
  },
  componentWillReceiveProps(nextProps){
    if(this.props.url!==nextProps.url){
      this.fetchExperts(`${nextProps.url}&page=1`,false)
      this.setState({
        page: 1
      })
    }
  },
  fetchExperts(url,load=true){
    superagent.get(url).end((error, response) => {
      this.setState({
        loading: false,
        itemList: load?this.state.itemList.concat(response.body):response.body,
        page: response.body.length===0?this.state.page + 0:this.state.page + 1,
        currentExperts: response.body
      })
    })
  },
  render() {
    let {loadMore, nothing} = this.props
    let loadmore = loadMore
    let loadless = nothing
    if(this.state.itemList.length === 0) {
      return <div style={{textAlign:'center'}}>
        <div className="loader"></div>
      </div>
    }
    return <div className="loader-container">
      {
        this.state.itemList.map((item, index) => {
          return <div className="expert-container" key={index}>
            <a href='#' className="link">
              <div className="img-bottom">{(item.surname)+(item.sex === 0?'先生':'女士')}</div>
            </a>
          </div>
        })
      }
      <div className="patent-bottom">
        <div style={{marginBottom:'25px'}} className={this.state.currentExperts.length === 0?'loading-close':'loading'}>
      {
        this.state.loading ? <div className="loader"></div> : <a href='/' onClick={(e)=>{
          e.preventDefault()
          this.setState({
            loading:true
          },()=>{
            this.fetchExperts(`${this.props.source}&page=${this.state.page}`)
          })
        }}>{loadmore}</a>
      }
    </div>
    <div className={this.state.currentExperts.length === 0?'nothing-open':'nothing'}>{loadless}</div>
    </div>
    </div>
  }
})
