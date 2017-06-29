btc-fee
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
