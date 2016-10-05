import React from 'react'
// require('../../Styles/tabbar.css')
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
		// let this = this;
		return (
			<div>
				<nav className="tab-title-items">
					{React.Children.map(this.props.children,(element, index) => {
						return (<div onClick={() => {this.setState({currentIndex: index})}} className={this.getTitleItemCssClasses(index)}>{element.props.name}</div>)
					})}
				</nav>
				<div className="tab-title-items">
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
      item1: '红色'
    }
  },
	render(){
    let {item1} = this.props
    let first = item1
		return(<div className="container">
						<TabsControl>
							<Tab name={first}>
								<div className="red">我是红色标签页</div>
							</Tab>
							<Tab name="蓝色">
								<div className="blue">我是蓝色标签页</div>
							</Tab>
							<Tab name="黄色">
								<div className="yellow">我是黄色标签页</div>
							</Tab>
						</TabsControl>
					</div>)
		}
})
