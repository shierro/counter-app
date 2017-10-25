import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';

class Header extends Component {
  render() {
    return (
      <Paper zDepth={2}>
        <AppBar
          title="Sitepoint frontend test"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
      </Paper>
    );
  }
}

export default Header;
