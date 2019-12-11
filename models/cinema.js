const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmsByProperty = function(property,value){
  this.films.filer((film) =>{
    return film.property == value
  })
}

module.exports = Cinema;
