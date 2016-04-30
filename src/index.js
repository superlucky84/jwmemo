import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory, hashHistory  } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'


import * as reducers from './reducers/jnote'
import {writeNote, getList} from './actions/jnote'


import App from './components/App';
import Empty from './components/Empty';
import View from './components/View';
import Write from './components/Write';


const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const store = createStore(
  reducer,
  //DevTools.instrument()
)
const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
  <Provider store={store}>
      <Router history={history}>
        <Route path="/"  component={App}>
          <IndexRoute component={Empty}/>
          <Route path="view/:id"  component={View}/>
          <Route path="write" component={Write}/>
          <Route path="write/:id" component={Write}/>
        </Route>
      </Router>
  </Provider>,
  document.getElementById('jnote')
)



