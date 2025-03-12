#![deny(clippy::all)]

#[macro_use]
extern crate napi_derive;

use chardetng::EncodingDetector;

#[napi]
pub fn detect(buffer: &[u8]) -> String {
  let mut detector = EncodingDetector::new();
  detector.feed(buffer, false);
  return detector.guess(None, true).name().to_string();
}
