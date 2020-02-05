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
  public getRandomFilm(yearGte: string|number = null, yearLte: string|number = null, voteAvgGte: string|number = null, voteAvgLte: string|number = null, orgCountry: string = null, certification: string = null): Observable<any> {
    const yearGteStr = yearGte === null ? '' : '&primary_release_date.gte=' + yearGte + '-01-01';
    const yearLteStr = yearLte === null ? '' : '&primary_release_date.lte=' + yearLte + '-12-01';
    const voteAvgGteStr = voteAvgGte === null ? '' : '&vote_average.gte=' + voteAvgGte;
    const voteAvgLteStr = voteAvgLte === null ? '' : '&vote_average.lte=' + voteAvgLte;
    const voteCount =  (voteAvgGte !== null && parseInt(voteAvgGte.toString()) < 6) ? '' : '&vote_count.gte=100';
    const orgCountryStr = orgCountry === null ? '' : '&with_original_language=' + orgCountry;
    const certificationStr = certification === null ? '': '&certification_country=US&certification=' + certification;
    const includeAdult = certification === 'NC-17' ? true : false;

    const url = 'https://api.themoviedb.org/3/discover/movie'
                + this.key
                + '&include_adult=' + includeAdult
                + yearGteStr
                + yearLteStr
                + voteCount
                + voteAvgGteStr
                + voteAvgLteStr
                + orgCountryStr
                + certificationStr
    
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
}
