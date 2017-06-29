btc-fee [![npm version](https://badge.fury.io/js/btc-fee.svg)](https://badge.fury.io/js/btc-fee) [![CircleCI](https://circleci.com/gh/genichiro/btc-fee/tree/master.svg?style=svg)](https://circleci.com/gh/genichiro/btc-fee/tree/master)
===
## Installation

```
npm install btc-fee
```

## Usage

```js
const btcfee = require('btc-fee')
```

### `recommended()`

```js
btcfee.recommended().then(fee => {
  console.log(fee);    // { fast: 330, medium: 310, slow: 260 }
});
```

### `estimated(latencyMinutes)`

```js
// About 180 minutes late is within an acceptable range
btcfee.estimated(180).then(fee => {
  console.log(fee);    // 210
});
```

## License

MIT
