import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  private key: string = '?api_key=bf0c6f557b4f024d829885a7e35e552d'
  private langEs: string = '&language=es-ES'

  constructor(private https: HttpClient) { }

  public getDefaultFilm(): Observable<any> {
    const defaultFilm = 27205;
    const defaultFilmUrl = 'https://api.themoviedb.org/3/movie/'+ defaultFilm;
    return this.https.get(defaultFilmUrl + this.key);
  }
  public getRandomFilm(yearGte: string|number = null, yearLte: string|number = null, voteAvgGte: string|number = null, voteAvgLte: string|number = null, certifGte: string = null, certifLte: string = null, genresArr: number[] = null, orgCountry: string = null): Observable<any> {
    const yearGteStr = yearGte === null ? '' : '&primary_release_date.gte=' + yearGte + '-01-01';
    const yearLteStr = yearLte === null ? '' : '&primary_release_date.lte=' + yearLte + '-12-01';
    const voteAvgGteStr = voteAvgGte === null ? '' : '&vote_average.gte=' + voteAvgGte;
    const voteAvgLteStr = voteAvgLte === null ? '' : '&vote_average.lte=' + voteAvgLte;
    const voteCount =  (voteAvgGte !== null && parseInt(voteAvgGte.toString()) >= 6) ? '&vote_count.gte=50' : '';
    const certifGteStr = certifGte === null ? '': '&certification.gte=' + certifGte;
    const certifLteStr = certifLte === null ? '': '&certification.lte=' + certifLte;
    const includeAdult = certifLte === 'NC-17' ? true : false;
    let genres = '?with_genres=';
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
    const orgCountryStr = orgCountry === null ? '' : '&with_original_language=' + orgCountry;
    const url = 'https://api.themoviedb.org/3/discover/movie'
                + this.key
                + yearGteStr
                + yearLteStr
                + voteCount
                + voteAvgGteStr
                + voteAvgLteStr
                + '&certification_country=US'
                + certifGteStr
                + certifLteStr
                + '&include_adult=' + includeAdult
                + genres
                + orgCountryStr
    //console.log(url);
    const obs = new Observable(observer => {
      this.https.get(url).subscribe((response: any) => {
        const page = Math.floor(Math.random() * response.total_pages) + 1;
        const randomPage = '&page=' + page;
        const urlWithPage = url + randomPage;
        this.https.get(urlWithPage).subscribe((finalResponse: any) => {
          const randomFilm = (Math.floor(Math.random() * finalResponse.results.length) + 1) - 1;
          const filmId = finalResponse.results[randomFilm].id;
          this.https.get('https://api.themoviedb.org/3/movie/'+ filmId + this.key).subscribe((film: any) => {
            observer.next(film);
          })
        });
      });
    })
    return obs;
  }

  public getGenresList(): Observable<any> {
    return this.https.get('https://api.themoviedb.org/3/genre/movie/list' + this.key);
  }
}
