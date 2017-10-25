import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import NotFound from './NotFound';
import configure, { history } from '../../store/configure';

describe('NotFound', () => {
  const wrapper = mount(
    <Provider store={configure()}>
      <ConnectedRouter history={history}>
        <NotFound />
      </ConnectedRouter>
    </Provider>
  );

  it('should render', () => {
    expect(wrapper.find('.kta-not-found').length).to.equal(1);
    expect(wrapper.find('h1').length).to.equal(1);
    expect(wrapper.find('h1').text()).to.equal('Not Found');
  });
});
