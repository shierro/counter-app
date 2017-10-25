import React, { PureComponent } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import CounterPage from '../../containers/CounterPage/CounterPage';
import NotFound from '../NotFound/NotFound';

class Router extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <div className="main-body">
          <Switch>
            <Route exact path="/" component={CounterPage} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Router);
