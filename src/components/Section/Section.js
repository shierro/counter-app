import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { Card, CardText } from 'material-ui/Card';

class Section extends Component {
  render() {
    const {
      name,
      child,
      isDisplay,
      imageSrc
    } = this.props;

    return (
      <section className={`kta-section ${isDisplay ? 'kta-section__active' : 'kta-section__in-active'}`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6 offset-md-3">
              <Card className="card">
                <CardText>
                  <h1>
                    <span className="kta-section__icon--container">
                      <img src={imageSrc} alt="img" className="kta-section__icon" />
                    </span>
                    { name }
                  </h1>
                  { child }
                </CardText>
              </Card>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Section.propTypes = {
  name: Proptypes.string.isRequired,
  child: Proptypes.element.isRequired,
  isDisplay: Proptypes.bool,
  imageSrc: Proptypes.string.isRequired
};

Section.defaultProps = {
  isDisplay: false
};

export default Section;
