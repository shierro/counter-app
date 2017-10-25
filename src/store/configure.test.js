import { expect } from 'chai';

import configure from './configure';
import { SET_PREMIUM_COVERAGE } from '../constants/actionTypes';

describe('configure Store', () => {
  const premium = {
    paymentMode: 'Annual',
    selectMode: 'coverage',
    minPremium: 14000,
    maxPremium: 103000,
    premium: '30,500.00',
    coverage: '100000',
    product: 'iProtect S'
  };

  it('should load prod/test config', () => {
    const store = configure();

    const preState = store.getState();

    expect(preState).to.include.all.keys(
      'insuredPerson',
      'premium',
      'i18n'
    );

    store.dispatch({
      type: SET_PREMIUM_COVERAGE,
      payload: premium
    });

    const nextState = store.getState();

    expect(nextState.premium).to.deep.equal(premium);
  });
});
