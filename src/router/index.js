import { React, BrowserRouter, Route, Switch } from 'libraries';
import { NotFound404 } from 'pages';
import { MasterLayout } from 'containers';
import nav from './nav';

const AppRoute = props => (
  <BrowserRouter>
    <Switch>
      {nav.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          render={routerProps => (
            <MasterLayout {...routerProps} {...props}>
              <route.component {...routerProps} {...props} />
            </MasterLayout>
          )}
        />
      ))}
      <Route
        render={routerProps => <NotFound404 {...routerProps} {...props} />}
      />
    </Switch>
  </BrowserRouter>
);

export default AppRoute;
