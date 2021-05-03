import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import getCurrentUser from './redux/auth/auth-operations';

import AppBar from './components/AppBar/AppBar';
import Loader from './data/Loader';
import routes from './routes';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute'
import "./App.css";

const HomePage = lazy(() =>
  import('./views/HomePageView' /* webpackChunkName: "home-view" */),
);
const LoginPage = lazy(() =>
  import('./views/LoginPageView' /* webpackChunkName: "login-view" */),
);
const RegistrationPage = lazy(() =>
  import('./views/RegisterPageView' /* webpackChunkName: "registration-view" */),
);
const Contacts = lazy(() =>
  import('./views/ContactsView' /* webpackChunkName: "contacts-view" */),
);

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
              component={RegistrationPage}
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