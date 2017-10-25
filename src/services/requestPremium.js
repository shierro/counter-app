import axios from 'axios';

export default function requestPremium(gender, dob, coverage, paymentMode) {
  return axios.post('https://th-life-quotation-module-uat.paas.axa-asia.com/api/quote', {
    profile: {
      gender,
      dob,
      coverage,
      paymentMode
    }
  });
}
