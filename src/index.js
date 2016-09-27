import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Counter from './Components/Counter'
import reducer from './Reducer'
// Action
// const increaseAction = { type: 'increase' }

// Store
const store = createStore(reducer)

// Map Redux state to component props
// function mapStateToProps(state) {
//   return {
//     value: state.count
//   }
// }

// // Map Redux actions to component props
// function mapDispatchToProps(dispatch) {
//   return {
//     onIncreaseClick: () => dispatch(increaseAction)
//   }
// }

// Connected Component
// const App = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Counter)

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
)
