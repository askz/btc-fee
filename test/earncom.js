import test from 'ava';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import earncom from 'earncom';

const HOST = 'https://bitcoinfees.earn.com/api/v1';
const mock = new MockAdapter(axios);

test('.recommended', async t => {
  t.plan(1);

  const RECOMMENDED = Object.freeze({
    fastestFee: 330,
    halfHourFee: 310,
    hourFee: 260
  });
  mock.onGet(`${HOST}/fees/recommended`).reply(200, RECOMMENDED);

  const fees = await earncom.recommended();
  t.deepEqual(fees, {
    fast: RECOMMENDED.fastestFee,
    medium: RECOMMENDED.halfHourFee,
    slow: RECOMMENDED.hourFee
  });
});

test('.list', async t => {
  t.plan(1);

  const LIST = Object.freeze([{
    minFee: 0,
    maxFee: 0,
    dayCount: 545,
    memCount: 87,
    minDelay: 4,
    maxDelay: 32,
    minMinutes: 20,
    maxMinutes: 420
  }]);
  mock.onGet(`${HOST}/fees/list`).reply(200, {
    fees: LIST
  });

  const fees = await earncom.list();
  t.deepEqual(fees, LIST);
});

test.after('cleanup', t => {
  mock.restore();
});
