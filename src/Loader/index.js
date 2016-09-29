// import React,{ PropTypes } from 'react'
// import superagent from 'superagent'
// require('../../Styles/loader.css')
// // let source = 'http://gs-api.sparklog.com/experts?per_page=4&order_by=-priority'
// module.exports = React.createClass({
//   getDefaultProps() {
//     return {
//       loadMore:'加载更多',
//       nothing:'没有更多了...',
//       source:'http://gs-api.sparklog.com/experts?per_page=4&order_by=-priority'
//     }
//   },
//   propTypes : {
//     loadMore: PropTypes.string.isRequired,
//     nothing: PropTypes.string.isRequired,
//     source: PropTypes.string.isRequired,
//   },
//   getInitialState() {
//     return {
//       experts: [],
//       loading: null,
//       page: 1,
//       currentExperts:[]
//     }
//   },
//   componentDidMount() {
//     let {source} = this.props
//     let url = source
//     this.fetchExperts(`${url}&page=${this.state.page}`)
//   },
//   componentWillReceiveProps(nextProps){
//     let {source} = this.props
//     let url = source
//     if(url!==nextProps.url){
//       this.fetchExperts(`${nextProps.url}&page=1`,false)
//       this.setState({
//         page: 1
//       })
//     }
//   },
//   fetchExperts(url,load=true){
//     superagent.get(url).end((error, response) => {
//       this.setState({
//         loading: false,
//         experts: load?this.state.experts.concat(response.body):response.body,
//         page: response.body.length===0?this.state.page + 0:this.state.page + 1,
//         currentExperts: response.body
//       })
//     })
//   },
//   render() {
//     let {loadMore, nothing, source} = this.props
//     let loadmore = loadMore
//     let loadless = nothing
//     let url = source
//     if(this.state.experts.length === 0) {
//       return <div style={{textAlign:'center'}}>
//         <div className="loader" style={{backgroundColor:'lightgray'}} ></div>
//       </div>
//     }
//     return <div className="expertlist">
//       {
//         this.state.experts.map((item, index) => {
//           return <div className="expert-container" key={index}>
//             <a href='#' className="link">
//               <div className="img-bottom">{(item.surname)+(item.sex === 0?'先生':'女士')}</div>
//             </a>
//           </div>
//         })
//       }
//       <div className="patent-bottom">
//         <div style={{marginBottom:'25px'}} className={this.state.currentExperts.length === 0?'loading-close':'loading'}>
//       {
//         this.state.loading ? <div className="loader" style={{backgroundColor:'lightgray'}}></div> : <a href='/' onClick={(e)=>{
//           e.preventDefault()
//           this.setState({
//             loading:true
//           },()=>{
//             this.fetchExperts(`${url}&page=${this.state.page}`)
//           })
//         }}>{loadmore}</a>
//       }
//     </div>
//     <div className={this.state.currentExperts.length === 0?'nothing-open':'nothing'}>{loadless}</div>
//     </div>
//     </div>
//   }
// })
