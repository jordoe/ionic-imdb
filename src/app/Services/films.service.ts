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
    const defaultFilm = 364;
    const defaultFilmUrl = 'https://api.themoviedb.org/3/movie/'+ defaultFilm;
    return this.https.get(defaultFilmUrl + this.key);
  }
  public getRandomFilm(): Observable<any> {
    let randomFilm = Math.floor(Math.random() * 440000) + 1;
    const randomFilmUrl = 'https://api.themoviedb.org/3/movie/'+ randomFilm;
    return this.https.get(randomFilmUrl + this.key);
  }
  public searchTest(): Observable<any> {{
    const query = '&query=a';
    const url = 'https://api.themoviedb.org/3/search/movie' + this.key + query + '&language=en-US&page=1&include_adult=false&year=2018'
    return this.https.get(url);
  }}
}
