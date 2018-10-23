import React from 'react';
import { render } from 'react-dom';
import routers from './routers/index';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Provider, autoStorageSave, store } from './utils/reduxFp';
import * as serviceWorker from './utils/serviceWorker';

autoStorageSave('bgi-dr-tom-v0.01', ['test', 'user']);

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            {routers.map(routerProps => {
              if (routerProps.redirect) {
                return (
                  <Route
                    exact
                    key={routerProps.path}
                    path={routerProps.path}
                    render={() => <Redirect to={routerProps.redirect} />}
                  />
                );
              }
              return <Route key={routerProps.path} exact {...routerProps} />;
            })}
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));

serviceWorker.unregister();
