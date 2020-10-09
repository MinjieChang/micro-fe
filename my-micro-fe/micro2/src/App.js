import React from 'react';
import { createBrowserHistory } from 'history';
import {Link, Switch, Route, Router} from 'react-router-dom'
import './App.css';

const defaultHistory = createBrowserHistory();

function Jack(){
  return <div className="jack">
    jack
  </div>
}

function Rose(){
  return <div className="rose">
    rose
  </div>
}

function App({ history = defaultHistory }) {
  console.log(history, 'history')
  let { location: { pathname } } = history
  pathname = pathname === '/' ? '' : pathname
  return (
    <div className="App">
      <div>我是microApp2</div>
      <Router history={history || defaultHistory}>
        <div><Link to={`${pathname}/jack`}>jack</Link></div>
        <div><Link to={`${pathname}/rose`}>rose</Link></div>
        <Switch>
          <Route path={`${pathname}/jack`} component={Jack}></Route>
          <Route path={`${pathname}/rose`} component={Rose}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
