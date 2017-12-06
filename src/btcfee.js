import earncom from './earncom';

export default {
  recommended() {
    return earncom.recommended();
  },

  estimated(latencyMinutes) {
    return earncom.list().then(fees => {
      const result = fees.find(fee => {
        return fee.maxMinutes <= latencyMinutes;
      });
      return result ? result.minFee : fees[fees.length - 1].minFee;
    });
  }
};
