import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navi from './views/Navi'
import MicroAppLoader from './MicroAppLoader'
import './App.css';

const env = {
  app1: process.env.REACT_APP_APP1_HOST,
  app2: process.env.REACT_APP_APP2_HOST,
}
function microApp1({ history }){
  return <MicroAppLoader history={history} host={env.app1} name="microapp1"></MicroAppLoader>
}
function microApp2({ history }){
  return <MicroAppLoader history={history} host={env.app2} name="microapp2"></MicroAppLoader>
}

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Navi></Navi>
        <Switch>
          {/* 坑 不可以加上exact 否则子程序无法监听到路由 */}
          <Route path='/microApp1' component={microApp1}></Route>
          <Route path='/microApp2' component={microApp2}></Route>
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
