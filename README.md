# @dockfries/chardetng

[![npm](https://img.shields.io/npm/v/@dockfries/chardetng)](https://www.npmjs.com/package/@dockfries/chardetng) ![npm](https://img.shields.io/npm/dy/@dockfries/chardetng) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@dockfries/chardetng)

Simple charset detector, powered by [chardetng](https://github.com/hsivonen/chardetng) and [napi-rs](https://github.com/napi-rs/napi-rs).

## Example

```typescript
import { detect } from '@dockfries/chardetng'

const guessCharset = detect(
  new Uint8Array([196, 227, 186, 195, 202, 192, 189, 231])
)
console.log(guessCharset === 'GBK')
```

## License

[MIT](./LICENSE)
