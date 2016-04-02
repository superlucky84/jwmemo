import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory, hashHistory  } from 'react-router'
import { syncHistory, routeReducer } from 'react-router-redux'

import * as reducers from './reducers/jnote'


console.log('reducers');
console.log(...reducers);



import {writeNote, getList} from './actions/jnote'

//console.log(actions);


import App from './components/App';
import Empty from './components/Empty';
import View from './components/View';
import Write from './components/Write';

const middleware = syncHistory(hashHistory)
const reducer = combineReducers({
  ...reducers,
  routing: routeReducer
})

const finalCreateStore = compose(
  applyMiddleware(middleware),
  //DevTools.instrument()
)(createStore);

const store = finalCreateStore(reducer);


//store.dispatch(writeNote('testtest11zzz','notenote11zzz'));
//store.dispatch(getList());
store.subscribe(function(data){
  console.log('SUBSCIBE_DATA',store.getState());
});

middleware.listenForReplays(store)

ReactDOM.render(
  <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/"  component={App}>
          <IndexRoute component={Empty}/>
          <Route path="view/:id"  component={View}/>
          <Route path="write" component={Write}/>
        </Route>
      </Router>
  </Provider>,
  document.getElementById('jnote')
)



