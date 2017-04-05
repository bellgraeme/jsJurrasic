var assert = require('assert');
var Park = require('../park.js');
var Dinosaur = require('../dinosaur.js');

describe('Park Test', function(){

  var park;
  var dino;


  beforeEach(function(){
    park = new Park();
    dino = new Dinosaur('Chasmosuarus', 4);
    dino2 = new Dinosaur('Euoplocephalus', 5);
    dino3 = new Dinosaur('Fruitadens',1);
    dino4 = new Dinosaur('Muttaburrasaurus', 1);
  })

  it('should have empty enclosure', function(){
    assert.strictEqual(0,  park.enclosure.length)
  })

  it('should be able to accept dinos', function(){
  park.add(dino);
    assert.strictEqual(1, park.enclosure.length)
  })


  it('should be able to remove type of dino', function(){
    park.add(dino);
    park.add(dino2);
    park.add(dino3);
    park.add(dino4);
    park.remove('Fruitadens')
    assert.strictEqual(3 , park.enclosure.length)
  })

  it('should get dinos with 2+ fertility', function(){
    park.add(dino);
    park.add(dino2);
    park.add(dino3);
    park.add(dino4);
    park.prune(2);
    assert.strictEqual(2 , park.breeders.length);
  })

})



