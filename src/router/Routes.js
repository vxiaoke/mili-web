import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import App from './../App';

import Home from '../page/Home/Index';
import About from '../page/About';

const Root = () => (
  <div>
    <Switch>
      <Route
        path="/"
        render={props => (
          <App>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/About" component={About} />
              {/*路由不正确时，默认跳回home页面*/}
              <Route render={() => <Redirect to="/About" />} />
            </Switch>
          </App>
        )}
      />
    </Switch>
  </div>
);

export default Root;