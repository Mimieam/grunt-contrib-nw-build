'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.contrib_nw_build = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(1);

    var is7z = grunt.file.exists('lib/7z.exe');
    var isBuilder = grunt.file.exists('lib/nw-builder.bat');
    var isPak = grunt.file.exists('tmp/build/win32/nw.pak');
    var isIcudt = grunt.file.exists('tmp/build/win32/icudt.dll');
    var isZip = grunt.file.exists('appName.nw');
    grunt.log.writeln('7z '+isZip);
    test.equal(is7z, true , 'should be true if the 7z is present.');
    test.equal(isBuilder, true , 'should be true if the nw-builder.bat is present.');
    test.equal(isPak, true , 'should be true if the nw.pak is present.');
    test.equal(isIcudt, true , 'should be true if the icudt.dll is present.');
    test.equal(isZip, true , 'should be true if the *.nw is present.');

    test.done();
  },
  custom_options: function(test) {
    test.expect(1);

    // var actual = grunt.file.read('tmp/custom_options');
    // var expected = grunt.file.read('test/expected/custom_options');
    // test.equal(actual, expected, 'should describe what the custom option(s) behavior is.');

    test.done();
  },
};
