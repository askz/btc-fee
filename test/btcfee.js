import test from 'ava';
import sinon from 'sinon';
import btcfee from 'btcfee';

// for stub
import earncom from 'earncom';

const RESPONSE = Object.freeze([{
  minFee: 0,
  maxFee: 0,
  dayCount: 67,
  memCount: 0,
  minDelay: 26,
  maxDelay: 10000,
  minMinutes: 180,
  maxMinutes: 10000
}, {
  minFee: 1,
  maxFee: 30,
  dayCount: 22980,
  memCount: 12578,
  minDelay: 5,
  maxDelay: 120,
  minMinutes: 40,
  maxMinutes: 1320
}, {
  minFee: 31,
  maxFee: 60,
  dayCount: 7259,
  memCount: 3751,
  minDelay: 5,
  maxDelay: 82,
  minMinutes: 30,
  maxMinutes: 900
}]);

test.before('sinon', t => {
  sinon.stub(earncom, 'list').returns(Promise.resolve(RESPONSE));
});

test('.estimated', async t => {
  t.plan(3);

  const first = await btcfee.estimated(10500);
  t.is(first, 0);
  const second = await btcfee.estimated(150);
  t.is(second, 1);
  const third = await btcfee.estimated(1);
  t.is(third, 31);
});

test.after('cleanup', t => {
  earncom.list.restore();
});
