import React, { PropTypes } from 'react'
import {connect } from 'react-redux'
import increaseAction from '../Action'
let Counter = React.createClass({
  propTypes : {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
  },
  render(){
    const { value, onIncreaseClick } = this.props
    return <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
  }
})
function mapStateToProps(state) {
  return {
    value: state.count
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
