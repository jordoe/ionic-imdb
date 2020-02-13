import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  private savedFilms: string[] = [];
  private seenFilms: string[] = [];
  private favoriteFilms: string[] = [];

  private key: string = '?api_key=bf0c6f557b4f024d829885a7e35e552d'
  private langEs: string = '&language=es-ES'

  constructor(private https: HttpClient) { }

  public getDefaultFilm(): Observable<any> {
    const defaultFilm = 27205;
    //const defaultFilm = 49049;
    // const defaultFilm = 1124;
    const defaultFilmUrl = 'https://api.themoviedb.org/3/movie/'+ defaultFilm;
    return this.https.get(defaultFilmUrl + this.key);
  }

  public getFilmDetails(id: string): Observable<any> {
    const film = 'https://api.themoviedb.org/3/movie/'+ id;
    return this.https.get(film + this.key);
  }

  public getFilmCredits(id: string): Observable<any> {
    const film = 'https://api.themoviedb.org/3/movie/'+ id + '/credits';
    return this.https.get(film + this.key);
  }

  public getSimilarFilms(id: string): Observable<any> {
    const film = 'https://api.themoviedb.org/3/movie/'+ id + '/similar';
    return this.https.get(film + this.key);
  }

  public getFilmImages(id: string): Observable<any> {
    const film = 'https://api.themoviedb.org/3/movie/'+ id + '/images';
    return this.https.get(film + this.key);
  }

  public getActorDetails(id: string): Observable<any> {
    const film = 'https://api.themoviedb.org/3/person/'+ id;
    return this.https.get(film + this.key);
  }

  public getActorImages(id: string): Observable<any> {
    const film = 'https://api.themoviedb.org/3/person/'+ id + '/images';
    return this.https.get(film + this.key);
  }

  public getActorFilms(id: string): Observable<any> {
    const film = 'https://api.themoviedb.org/3/person/'+ id + '/movie_credits';
    return this.https.get(film + this.key);
  }

  public getRandomFilm(yearGte: string|number = null, yearLte: string|number = null, voteAvgGte: string|number = null, voteAvgLte: string|number = null, certifGte: string = null, certifLte: string = null, genresArr: number[] = null, orgLanguage: string = null): Observable<any> {
    const yearGteStr = yearGte === null ? '' : '&primary_release_date.gte=' + yearGte + '-01-01';
    const yearLteStr = yearLte === null ? '' : '&primary_release_date.lte=' + yearLte + '-12-01';
    const voteAvgGteStr = voteAvgGte === null ? '' : '&vote_average.gte=' + voteAvgGte;
    const voteAvgLteStr = voteAvgLte === null ? '' : '&vote_average.lte=' + voteAvgLte;
    const voteCount =  (voteAvgGte !== null && parseInt(voteAvgGte.toString()) >= 6) ? '&vote_count.gte=50' : '';
    const certifGteStr = certifGte === null ? '': '&certification.gte=' + certifGte;
    const certifLteStr = certifLte === null ? '': '&certification.lte=' + certifLte;
    const includeAdult = certifLte === 'NC-17' ? true : false;
    let genres = '&with_genres=';
    if (genresArr === null) {
      genres = '';
    } else {
      genresArr.forEach((genre, i) => {
        genres = genres + genre;
        if (!(i == genresArr.length-1)) {
          genres = genres + ',';
        }
      });
    }
    const orgLanguageStr = orgLanguage === null ? '' : '&with_original_language=' + orgLanguage;
    const url = 'https://api.themoviedb.org/3/discover/movie'
                + this.key
                + genres
                + yearGteStr
                + yearLteStr
                + voteCount
                + voteAvgGteStr
                + voteAvgLteStr
                + '&certification_country=US'
                + certifGteStr
                + certifLteStr
                + '&include_adult=' + includeAdult
                + orgLanguageStr
    //console.log(url);
    const obs = new Observable(observer => {
      this.https.get(url).subscribe((response: any) => {
        const page = Math.floor(Math.random() * response.total_pages) + 1;
        const randomPage = '&page=' + page;
        const urlWithPage = url + randomPage;
        this.https.get(urlWithPage).subscribe((finalResponse: any) => {
          if(finalResponse.results.length === 0) {
            observer.next(null);
          } else {
            const randomFilm = (Math.floor(Math.random() * finalResponse.results.length) + 1) - 1;
            const filmId = finalResponse.results[randomFilm].id;
            this.https.get('https://api.themoviedb.org/3/movie/'+ filmId + this.key).subscribe((film: any) => {
              observer.next(film);
            })
          }
        });
      });
    })
    return obs;
  }
  
  public getFilmsResults(page: number = null, yearGte: string|number = null, yearLte: string|number = null, genresArr: number[] = null, adultFilms: boolean = false, sortby: string = null): Observable<any> {
    const pageStr = page === null ? '' : '&page=' + page;
    const yearGteStr = yearGte === null ? '' : '&primary_release_date.gte=' + yearGte + '-01-01';
    const yearLteStr = yearLte === null ? '' : '&primary_release_date.lte=' + yearLte + '-12-01';
    const includeAdult = '&include_adult=' + adultFilms;
    let genres = '&with_genres=';
    if (genresArr === null) {
      genres = '';
    } else {
      genresArr.forEach((genre, i) => {
        genres = genres + genre;
        if (!(i == genresArr.length-1)) {
          genres = genres + ',';
        }
      });
    }    
    const sortbyStr = sortby === null ? '' : '&sort_by=' + sortby;

    const url = 'https://api.themoviedb.org/3/discover/movie' + this.key + pageStr + genres + yearGteStr + yearLteStr + includeAdult + sortbyStr;
    const obs = new Observable(observer => {
      this.https.get(url).subscribe((response: any) => {
        observer.next(response);
      });
    });

    return obs;
  }

  public searchFilms(input: string): Observable<any> {
    const url = 'https://api.themoviedb.org/3/search/movie' + this.key + '&query=' + input;
    const obs = new Observable(observer => {
      this.https.get(url).subscribe((response: any) => {
        observer.next(response);
      });
    });

    return obs;
  }

  public getGenresList(): Observable<any> {
    return this.https.get('https://api.themoviedb.org/3/genre/movie/list' + this.key);
  }

  public initSeenStatesStorage(): void {
    if (window.localStorage["savedFilms"] == undefined) {
      window.localStorage["savedFilms"] == "[]";
    } else {
      this.savedFilms = JSON.parse(window.localStorage["savedFilms"]);
    }
    if (window.localStorage["seenFilms"] == undefined) {
      window.localStorage["seenFilms"] == "[]";
    } else {
      this.seenFilms = JSON.parse(window.localStorage["seenFilms"]);
    }
    if (window.localStorage["favoriteFilms"] == undefined) {
      window.localStorage["favoriteFilms"] == "[]";
    } else {
      this.favoriteFilms = JSON.parse(window.localStorage["favoriteFilms"]);
    }
  }

  private updateSeenStateStorage(): void {
    window.localStorage["savedFilms"] = JSON.stringify(this.savedFilms);
    window.localStorage["seenFilms"] = JSON.stringify(this.seenFilms);
    window.localStorage["favoriteFilms"] = JSON.stringify(this.favoriteFilms);
  }

  public checkSeenState(filmId: string): Observable<any> {
    const obs = new Observable(observer => {
      let result;
      if (this.savedFilms.includes(filmId)) {
        result = 1;
      } else if (this.seenFilms.includes(filmId)) {
        result = 2;
      } else if (this.favoriteFilms.includes(filmId)) {
        result = 3;
      } else {
        result = 0;
      }
      observer.next(result);
    });
    return obs;
  }

  public setState(state: number, filmId: string): void {
    switch (state) {
      case 0:
        this.savedFilms = this.savedFilms.filter(x => x !== filmId);
        this.seenFilms = this.seenFilms.filter(x => x !== filmId);
        this.favoriteFilms = this.favoriteFilms.filter(x => x !== filmId);
        break;
      case 1:
        this.savedFilms.push(filmId);
        this.seenFilms = this.seenFilms.filter(x => x !== filmId);
        this.favoriteFilms = this.favoriteFilms.filter(x => x !== filmId);
        break;
      case 2:
        this.savedFilms = this.savedFilms.filter(x => x !== filmId);
        this.seenFilms.push(filmId);
        this.favoriteFilms = this.favoriteFilms.filter(x => x !== filmId);
        break;
      case 3:
        this.savedFilms = this.savedFilms.filter(x => x !== filmId);
        this.seenFilms = this.favoriteFilms.filter(x => x !== filmId);
        this.favoriteFilms.push(filmId);
          break;
    
      default:
        break;
    }
    this.updateSeenStateStorage();
  }

  public getSavedFilmsLists(listId: number): Observable<any> {
    let listArr;
    switch (listId) {
      case 0:
        listArr = this.savedFilms;
        break;
      case 1:
        listArr = this.seenFilms;
        break;
      case 2:
        listArr = this.favoriteFilms;
        break;
    
      default:
        break;
    }
    const obs = new Observable(observer => {
      let resultArr = [];
      let observablesArr = [];
      for (const filmId of listArr) {
        observablesArr.push(this.getFilmDetails(filmId));
      }
      forkJoin(observablesArr).subscribe((result: any) => {
        for (const [i, observable] of result.entries()) {
          resultArr.push(observable);
        }
        observer.next(resultArr);
      });
    });
    return obs;    
  }
}
