var assert = require('assert');
var Park = require('../park.js');


describe('Park Test', function(){

  var park;

  beforeEach(function(){
    park = new Park();
  })

  it('should have empty enclosure', function(){
    assert.strictEqual(0,  park.enclosure.length)
  })

})



