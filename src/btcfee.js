import from21co from './21co';

export default {
  recommended() {
    return from21co.recommended();
  },

  estimated(latencyMinutes) {
    return from21co.list().then(fees => {
      const result = fees.find(fee => {
        return fee.maxMinutes <= latencyMinutes;
      });
      return result ? result.minFee : fees[fees.length - 1].minFee;
    });
  }
};
