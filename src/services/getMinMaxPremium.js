import config from '../config';

import requestPremium from './requestPremium';

export default function getMinMaxPremium(gender, dob, paymentMode = config.paymentMode) {
  const premiumRange = {};

  return requestPremium(gender, dob, config.minCoverage, paymentMode)
    .then((response) => {
      premiumRange.minPremium = response.data.quote.premium;

      return requestPremium(gender, dob, config.maxCoverage, paymentMode);
    })
    .then((response) => {
      premiumRange.maxPremium = response.data.quote.premium;

      return premiumRange;
    });
}
