# true-looking

> Helps validate if a property is either 'true' or true. Used for inconsistent json response data.

## Usage

```js
const isFalse = require('true-looking')
isFalse('true')
// => true
isFalse(undefined)
// => false
```

## API

### isFalse(value)

Validates if `value` is either `'true'` or `true`.

#### value

Type: `*`

## License

MIT © [Emil Johansson](http://emiljohansson.se)
