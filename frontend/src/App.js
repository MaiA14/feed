import React from 'react';
import { Router, Switch, Route} from 'react-router';
import history from './history';
import global from '../src/assets/styles/global.scss';

import FeedApp from '../src/pages/FeedApp.js';

function App() {
  return (
    <div className="App"> 
      <Router history={history}>
        <Switch>
        <Route component={FeedApp} path="/" exact></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
