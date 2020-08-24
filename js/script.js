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
//Первый цикл


// for(let i = 0; i < 2; i++) {
//     let a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', ''); 

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         presonalMovieDB.movies[a] = b;
//         console.log('Done!');
//     } else {
//         console.log('error');
//         i--;
//     }

// }

//Второй вариант цикла

let a, 
    b,
    i = 0;
//  while (i <= 1) {
//     a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', ''), 
//     presonalMovieDB.movies[a] = b;
//     i++;   
//  }

// Третий вариант цикла 

    do {
        a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', ''), 
        presonalMovieDB.movies[a] = b;
        i++;   
    } 
    while (i <= 1);



if (presonalMovieDB.count < 10) {
    console.log('Вы посмотрели довольно таки мало фильмов');
}  else if (presonalMovieDB.count >= 10 && presonalMovieDB.count < 30) {
    console.log('Хороший список фильмов!');
} else if (presonalMovieDB.count >= 30) {
    console.log('Вы киноман!');
} else {
    console.log('Произошла ошибка');
}


console.log(presonalMovieDB);


