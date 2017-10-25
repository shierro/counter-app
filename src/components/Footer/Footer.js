import React, { PureComponent } from 'react';

class Footer extends PureComponent {
  render() {
    return (
      <div className="container footer">
        <div className="row footer-bottom">
          <div className="footer-languages-bottom-container">
            <span className="footer-languages-label" />
          </div>
          <div className="footer-copyline footer-copyline-bottom" />
        </div>
      </div>
    );
  }
}

export default Footer;
