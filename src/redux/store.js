import { createStore } from 'redux'

const root_reducer = (state=0, action) => {
    switch (action.type) {
        case 'INCREMENT':
          return state + 1
        case 'DECREMENT':
          return state - 1
        default:
          return state
      }
}

let store = createStore(root_reducer);

export default store;