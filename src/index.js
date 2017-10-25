import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import configure, { history } from './store/configure';
import Router from './components/Router/Router';
import registerServiceWorker from './registerServiceWorker';
import { getCounters } from './actions/counterActions';

import './css/index.css';

const store = configure();

// update premium from url
store.dispatch(getCounters());

// render DOM
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Router />
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>, document.getElementById('root')
);

registerServiceWorker();
