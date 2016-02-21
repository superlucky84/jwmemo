import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistory, routeReducer } from 'react-router-redux'

import * as reducers from './reducers/jnote'


console.log('reducers');
console.log(...reducers);



import {writeNote} from './actions/jnote'

//console.log(actions);


//import { App, Home, Foo, Bar } from './components'

const middleware = syncHistory(browserHistory)
const reducer = combineReducers({
  ...reducers,
  routing: routeReducer
})

const finalCreateStore = compose(
  applyMiddleware(middleware),
  //DevTools.instrument()
)(createStore);

const store = finalCreateStore(reducer);


store.dispatch(writeNote('testtest11','notenote11'));

middleware.listenForReplays(store)


/*
ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="foo" component={Foo}/>
          <Route path="bar" component={Bar}/>
        </Route>
      </Router>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('mount')
)
*/
