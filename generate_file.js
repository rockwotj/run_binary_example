const is = require('is-thirteen');
const fs = require('fs');
const assert = require('assert');

assert(process.argv.length === 3, 'This program requires just a single argument of the output file.');

fs.writeFileSync(
  process.argv[2],
  JSON.stringify(is(13).thirteen()),
);

