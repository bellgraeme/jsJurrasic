var Dinosaur = function (name, birthRate){  
  this.name = name;
  this.birthRate = birthRate;

}

Dinosaur.prototype = {
  birthRate: function(){
    return this.birthRate;
  }
}





module.exports = Dinosaur;