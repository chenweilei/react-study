import React from 'react';
import ReactDOM from 'react-dom';
import asyncComponent from './asyncComponent'
import {
  //HashRouter,
  BrowserRouter,
  Route,
  //Link,
  //Switch
} from 'react-router-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const App = asyncComponent(() => import('./App'))
const Kuaidi = asyncComponent(() => import('./Kuaidi'))

ReactDOM.render(

  (<BrowserRouter>
    <div>
        <Route exact path="/" component={App} />
        <Route exact path="/kuaidi" component={Kuaidi} />
    </div>
  </BrowserRouter>)
	, document.getElementById('root'));
registerServiceWorker();
