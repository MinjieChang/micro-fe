import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

window.rendermicroapp2 = function(domId, history){
  ReactDOM.render(<App history={history} />, document.getElementById(domId));
  serviceWorker.unregister();
}

window.unmountmicroapp2 = function(domId){
  ReactDOM.unmountComponentAtNode(document.getElementById(domId));
}
