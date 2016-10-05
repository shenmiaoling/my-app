import React from 'react'
require('../../Styles/tabbar.css')
let TabsControl = React.createClass({
  getInitialState(){
    return{
      currentIndex: 0
    }
  },
  getTitleItemCssClasses(index){
    return index === this.state.currentIndex ? "tab-title-item active" : "tab-title-item"
  },
  getContentItemCssClasses(index){
    return index === this.state.currentIndex ? "tab-content-item active" : "tab-content-item"
  },
  render(){
    return (
      <div>
        <nav className="tab-title-items">
          {React.Children.map(this.props.children,(element, index) => {
            return (<div onClick={() => {this.setState({currentIndex: index})}} className={this.getTitleItemCssClasses(index)}>{element.props.name}</div>)
          })}
        </nav>
        <div className="tab-content-items">
          {React.Children.map(this.props.children,(element, index) => {
            return (<div className={this.getContentItemCssClasses(index)}>{element}</div>)
          })}
        </div>
      </div>
      )
  }
});
let Tab = React.createClass({
  render(){
    return(<div>{this.props.children}</div>)
  }
})

module.exports = React.createClass({
  getDefaultProps() {
    return {
      item1: '红色',
      item2: '蓝色',
      item3: '黄色',
      item4: '粉红色',
      item5: '绿色',
      item6: '灰色',
      item1Content: <div className="red">我是红色标签页</div>,
      item2Content: <div className="blue">我是蓝色标签页</div>,
      item3Content: <div className="yellow">我是黄色标签页</div>,
      item4Content: <div className="pink">我是粉红色标签页</div>,
      item5Content: <div className="green">我是绿色标签页</div>,
      item6Content: <div className="gray">我是灰色标签页</div>
    }
  },
  render(){
    let {item1,item2,item3,item4,item5,item6,item1Content,item2Content,item3Content,item4Content,item5Content,item6Content} = this.props
    let first = item1
    let second = item2
    let third = item3
    let fourth = item4
    let fifth = item5
    let sixth = item6
    let item1content = item1Content
    let item2content = item2Content
    let item3content = item3Content
    let item4content = item4Content
    let item5content = item5Content
    let item6content = item6Content
    return(<div className="container">
            <TabsControl>
              <Tab name={first}>
                {item1content}
              </Tab>
              <Tab name={second}>
                {item2content}
              </Tab>
              <Tab name={third}>
                {item3content}
              </Tab>
              <Tab name={fourth}>
                {item4content}
              </Tab>
              <Tab name={fifth}>
                {item5content}
              </Tab>
              <Tab name={sixth}>
                {item6content}
              </Tab>
            </TabsControl>
          </div>)
    }
})
