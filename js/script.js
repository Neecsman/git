 "use strict";
// 1
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

console.log(numberOfFilms);


// 2
const presonalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


//3 

let a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('На сколько оцените его?', '');

presonalMovieDB.movies[a] = b;
presonalMovieDB.movies[c] = d;

console.log(presonalMovieDB);