# true-looking

> Helps validate if a property is either 'true' or true. Used for inconsistent json response data.

## Usage

```js
const isTrue = require('true-looking')
isTrue('true')
// => true
isTrue(undefined)
// => false
```

## API

### isTrue(value)

Validates if `value` is either `'true'` or `true`.

#### value

Type: `*`

## License

MIT © [Emil Johansson](http://emiljohansson.se)
