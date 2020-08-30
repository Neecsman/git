 "use strict";
  
const presonalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        presonalMovieDB.count  = +prompt('Сколько фильмов вы уже посмотрели?', '');
     
        while (presonalMovieDB.count == '' || presonalMovieDB.count == null || isNaN(presonalMovieDB.count)) {
            presonalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
        if (presonalMovieDB.count < 10) {
                console.log('Вы посмотрели довольно таки мало фильмов');
            }  else if (presonalMovieDB.count >= 10 && presonalMovieDB.count < 30) {
                console.log('Хороший список фильмов!');
            } else if (presonalMovieDB.count >= 30) {
                console.log('Вы киноман!');
            } else {
                console.log('Произошла ошибка');
            }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(presonalMovieDB); 
        }
    },
    toggleVisibleMyDB: function () {
        if (presonalMovieDB.private) {
            presonalMovieDB.private = false;
        } else {
            presonalMovieDB.private = true;
        }
    },
    writeYourGenres: function () {
        for(let i = 1; i <=3; i++) {
            let ganre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (ganre == '' ||  ganre == null) {
                console.log('Вы ввели некорретные данные!');
                i--;
            } else {
                presonalMovieDB.genres[i - 1] = ganre;
            }
        }
        presonalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1 } - это ${item}`);
        });
    }
};

