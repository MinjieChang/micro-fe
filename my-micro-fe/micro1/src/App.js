import React from 'react';
import { createBrowserHistory } from 'history';
import {Link, Switch, Route, Router} from 'react-router-dom'
import Hello from './components/Hello'
import './App.css';

const defaultHistory = createBrowserHistory();



function World(){
  return <div>
    World
  </div>
}

function App({ history = defaultHistory }) {
  // 坑 注意这里的history 需要考虑到加载器中没有传进来的情况
  let { location: { pathname } } = history
  pathname = pathname === '/' ? '' : pathname
  return (
    <div className="App">
      <div>这里是microapp1呀</div>
      <Router history={history || defaultHistory}>
        <div><Link to={`${pathname}/hello`}>hello</Link></div>
        <div><Link to={`${pathname}/world`}>world</Link></div>
        <Switch>
          <Route path={`${pathname}/hello`} component={Hello}></Route>
          <Route path={`${pathname}/world`} component={World}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
