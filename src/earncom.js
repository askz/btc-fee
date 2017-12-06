import axios from 'axios';

const HOST = 'https://bitcoinfees.earn.com/api/v1';

export default {
  recommended() {
    return axios.get(`${HOST}/fees/recommended`).then(response => {
      return {
        fast: response.data.fastestFee,
        medium: response.data.halfHourFee,
        slow: response.data.hourFee
      };
    });
  },

  list() {
    return axios.get(`${HOST}/fees/list`).then(response => {
      return response.data.fees;
    });
  }
};
