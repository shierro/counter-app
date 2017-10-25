import moment from 'moment';

function getAge(birthdate, dateFormat = 'MM/DD/YYYY') {
  if (
    typeof birthdate !== 'string' ||
    !moment(birthdate, dateFormat, true).isValid()
  ) {
    return 0;
  }

  const age = moment().diff(moment(birthdate, dateFormat), 'years');
  return age > 0 ? age : 0;
}

export default getAge;
