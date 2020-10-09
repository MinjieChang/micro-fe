import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// 坑 注意，这个方法需要和加载器里的方法保持一致
window.rendermicroapp1 = function(domId, history){
  console.log('rendermicroapp1')
  ReactDOM.render(<App history={history} />, document.getElementById(domId));
  serviceWorker.unregister();
}

window.unmountmicroapp1 = function(domId){
  ReactDOM.unmountComponentAtNode(document.getElementById(domId));
}