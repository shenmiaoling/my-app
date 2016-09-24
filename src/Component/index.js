import React from 'react'
import superagent from 'superagent'
// import {API_URL} from '../../constants.js'
import ReactDOM from 'react-dom'
import _ from 'underscore'
require('./styles.css')
module.exports = React.createClass({
  getInitialState(){
    return{
      isInput: false,
      value:''
    }
  },
  // componentDidMount(){
  //   ReactDOM.findDOMNode(this.refs.searchInput).focus()
  //   this.setState({
  //     value: this.props.location.query.q||''
  //   })
  // },
  handleChange(event){
    if(!_.isEmpty(event.target.value)){
      this.setState({
        isInput: true
      })
    }
    // superagent.get(`${API_URL}/search?q=${event.target.value}`).end((err,response)=>{
    //   console.log(response.body)
    // })
  },
  render() {
    return <div className="input">
      <span className=" iconfont icon-sousuo icon-input"></span><input className="home-search" placeholder="搜索" onChange={this.handleChange} ref='searchInput'/>
      <div className={this.state.isInput?"key-input":"key-input-close"}>
        <div className="key-content">这是获取到关键字的问题...</div>
        <div className="key-content">这是获取到关键字的问题...</div>
      </div>
      </div>
  }
})
