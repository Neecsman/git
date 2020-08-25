 "use strict";
// 1
let numberOfFilms; 

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
 
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start(); 

// 2
const presonalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

// 3

function rememberMyFilms() {
    for(let i = 0; i < 2; i++) {
        let a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', ''); 
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            presonalMovieDB.movies[a] = b;
            console.log('Done!');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();


function detectPersonalLevel () {
    if (presonalMovieDB.count < 10) {
        console.log('Вы посмотрели довольно таки мало фильмов');
    }  else if (presonalMovieDB.count >= 10 && presonalMovieDB.count < 30) {
        console.log('Хороший список фильмов!');
    } else if (presonalMovieDB.count >= 30) {
        console.log('Вы киноман!');
    } else {
        console.log('Произошла ошибка');
    }
}

ie
detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
       console.log(presonalMovieDB); 
    }
}
showMyDB(presonalMovieDB.private);


function writeYourGenres() {
    for(let i = 1; i <=3; i++) {
        presonalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();




