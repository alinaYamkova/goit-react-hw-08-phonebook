import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentUser } from './redux/auth/auth-operations';

import AppBar from './components/AppBar/AppBar';
import Loader from './data/Loader';
import routes from './routes';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
// Lazy imports for views
const HomePage = lazy(() =>
  import('./views/HomePageView' /* webpackChunkName: "home-page" */),
);
const LoginPage = lazy(() =>
  import('./views/LoginPageView' /* webpackChunkName: "login-page" */),
);
const RegisterPage = lazy(() =>
  import('./views/RegisterPageView' /* webpackChunkName: "register-page" */),
);
const Contacts = lazy(() =>
  import('./views/ContactsView' /* webpackChunkName: "contacts-page" */),
);
const NotFoundPage = lazy(() =>
  import('./views/NotFoundPageView' /* webpackChunkName: "contacts-page" */),
);

import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <>
        <Suspense fallback={ <Loader /> }>
          <AppBar />
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <PublicRoute
              path={routes.register}
              component={RegisterPage}
              restricted
              redirectTo={routes.home}
            />
            <PublicRoute
              path={routes.login}
              component={LoginPage}
              restricted
              redirectTo={routes.contacts}
            />
            <PrivateRoute
              path={routes.contacts}
              component={Contacts}
              redirectTo={routes.login}
            />
            <Route component={NotFoundPage} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = {
  getCurrentUser,
};
export default connect(null, mapDispatchToProps)(App);