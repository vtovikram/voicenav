import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import helloReducer from './src/js/voiceToText/reducers'
import App from './src/js/voiceToText/components/App'

let store = createStore(helloReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
