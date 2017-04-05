var Park = function(){
  this.enclosure = [];
  this.breeders = [];
}

Park.prototype = {
  add: function(dino){
    this.enclosure.push(dino)
  },
  remove: function(name){
    var dino;
    for(dino of this.enclosure){
      if(dino.name === name){
        var index = this.enclosure.indexOf(name);
        this.enclosure.splice(index, 1);
      }
    }
  },
  prune: function(fertiltyRate){

      for(dino of this.enclosure){
        if(dino.birthRate <= fertiltyRate){
          this.breeders.push(dino)
        }

      }

  }
}




module.exports = Park;

// remove: function(name){
//   for (var i = 0; i < this.enclosure.length; i++){
//     if(i.name === name){
//       var index = this.enclosure.indexOf(name);
//       this.enclosure.splice(index, 1);
//     }
//   }
// },