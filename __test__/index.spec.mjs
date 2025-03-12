/* eslint-disable node/prefer-global/buffer */
import test from 'ava'

import { detect } from '../index.js'

test('detect', (t) => {
  t.is(detect(Buffer.from('你好世界')), 'UTF-8')
  t.is(detect(new Uint8Array([196, 227, 186, 195, 202, 192, 189, 231])), 'GBK')
})
