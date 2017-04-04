var assert = require('assert');
var Dinosaur = require('../dinosaur.js');


describe('Dinosaur Test', function(){

  var dino;

  beforeEach(function(){
    dino = new Dinosaur('Chasmosuarus', 4);
  })

it('dino has type', function(){
  assert.strictEqual('Chasmosuarus', dino.name);
})


})