const assert = require('assert');
const Cinema = require('../models/cinema.js');
const Film = require('../models/film.js');

describe('Cinema', function () {

  let moonlight;
  let bladeRunner;
  let dunkirk;
  let blackPanther;
  let trainspotting;
  let films;
  let cinema;

  beforeEach(function () {
    moonlight = new Film('Moonlight', 'drama', 2016, 111);
    bladeRunner = new Film('Blade Runner 2049', 'sci-fi', 2017, 164);
    dunkirk = new Film('Dunkirk', 'history', 2017, 96);
    blackPanther = new Film('Black Panther', 'action', 2018, 134);
    trainspotting = new Film('T2 Trainspotting', 'drama', 2017, 117);

    films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];
    cinema = new Cinema(films);
  });

  it('should have a collection of films', function () {
    const actual = cinema.films;
    assert.deepStrictEqual(actual, films);
  });

  it('should be able to get a list of film titles',function () {
   const actual = films.map((film) => {
      return film.title
    })
    const expected = ['Moonlight','Blade Runner 2049','Dunkirk','Black Panther','T2 Trainspotting']
    assert.deepStrictEqual(actual,expected)
  });




  it('should be able to find a film by title', function(){
    let title = 'Dunkirk'
    const found = films.find((film) =>{
      return film.title == title
    })
    assert.deepStrictEqual(found,dunkirk)
  });



  it('should be able to filter films by genre', function(){
    let genre = 'drama';
    const dramaFilms = films.filter((film) =>{
      return film.genre == genre
    })
    assert.deepStrictEqual(dramaFilms,[moonlight,trainspotting])
  });


  it('should be able to check whether there are some films from a particular year', function(){
    let year = 2017;
    const filmsOf2017 = films.some((film) =>{
      return film.year == year;
    })
    assert.deepStrictEqual(filmsOf2017,true)
  });

  it('should be able to check whether there are no films from a particular year', function(){
    let year = 1700;
    const noFilmsOf1700 = films.every((film) =>{
      return film.year != year
    })
    assert.deepStrictEqual(noFilmsOf1700,true)
  });

  it('should be able to check whether all films are over a particular length', function(){
    let length = 90;
    const filmsOver90 = films.every((film) =>{
      return film.length > length
    })
    assert.deepStrictEqual(filmsOver90,true)
  });


  it('should be able to calculate total running time of all films', function(){
    const filmsRunTime = films.reduce((time,film) =>{
      return time + film.length
    },0)
    assert.strictEqual(filmsRunTime,622)
  });

  it('should be able to filter films by year', function(){
    let ourLength = 111;
    const ourFilmOfOurLength = cinema.filmsByProperty(length,ourLength);
    assert.deepStrictEqual(ourFilmOfOurLength,moonlight)
  })

});
