

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', 0);
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', 0);
        }
    },
    rememberMyFilms: function() {
        flag: for (let i = 0; i < personalMovieDB.count; i++) {
    
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count < 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
        
    },
    showMyDb: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {

        let tempVarForQuest = prompt('Ваши любимые жанры (через зяпятую)');
        while (tempVarForQuest == '' || tempVarForQuest == null) {
            tempVarForQuest = prompt('Ваши любимые жанры (через зяпятую)');
        }
        personalMovieDB.genres = tempVarForQuest.toLowerCase().split(', ').sort();
            

        personalMovieDB.genres.forEach((value, index) => {
            console.log(`Любимый жанр #${index + 1} - это ${value}`);
        });
    },
    toggleVisibleMyDB: function() {
        (personalMovieDB.privat) ? personalMovieDB.privat = false : personalMovieDB.privat = true;
    },
    
};

personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.showMyDb();

personalMovieDB.writeYourGenres();






