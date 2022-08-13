let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 0);

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 0);
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    flag: for (let i = 0; i < numberOfFilms; i++) {

        let answerAboutLastFilm = prompt('Один из последних просмотренных фильмов?', '');
    
        if (answerAboutLastFilm == null || answerAboutLastFilm == '' || answerAboutLastFilm.length >= 50) {
            i--;
            continue flag;
        }
    
        let answerAboutRating = prompt('На сколько оцените его?');
    
        if (answerAboutRating == null || answerAboutRating == '' || answerAboutRating.length >= 50) {
            i--;
            continue flag;
        }
    
        personalMovieDB.movies[answerAboutLastFilm] = answerAboutRating;
    
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count < 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
    
}

detectPersonalLevel();

function showMyDb() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDb();

function writeYourGenres() {
    for (i = 1; i <= 3; i++) {
        personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`));
    }
}

writeYourGenres();
