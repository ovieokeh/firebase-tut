import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import PrivateRoute from './utilities/PrivateRoute';
import PublicRoute from './utilities/PublicRoute';
import fBase from './utilities/firebase';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Protected from './components/Protected';
import './components/style.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { user: null };
    this.history = createBrowserHistory();
  }

  componentDidMount() {
    fBase.auth().onAuthStateChanged((auth) => {
      if (auth) {
        this.setState({ user: auth.providerData[0] });
      }
    });
  }

  render() {
    const { user } = this.state;

    return (
      <Router history={this.history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <PublicRoute path="/signup" component={Signup} user={user} />
          <PublicRoute path="/login" component={Login} user={user} />
          <PrivateRoute path="/protected" component={Protected} user={user} />
        </Switch>
      </Router>
    );
  }
}

export default App;
