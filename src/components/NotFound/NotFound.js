import React, { Component } from 'react';
import { connect } from 'react-redux';
import { I18n } from 'react-redux-i18n';
import Proptypes from 'prop-types';

class NotFound extends Component {
  render() {
    return (
      <div className="kta-not-found">
        <h1>{I18n.t('notFound')}</h1>
      </div>
    );
  }
}

NotFound.propTypes = {
  i18n: Proptypes.object.isRequired
};

function mapStateToProps({ i18n }) {
  return {
    i18n
  };
}

export default connect(
  mapStateToProps,
  null
)(NotFound);
