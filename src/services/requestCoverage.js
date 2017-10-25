import axios from 'axios';

export default function requestCoverage(gender, dob, premium, paymentMode) {
  return axios.post('https://th-life-quotation-module-uat.paas.axa-asia.com/api/quote', {
    profile: {
      gender,
      dob,
      premium,
      paymentMode
    }
  });
}
