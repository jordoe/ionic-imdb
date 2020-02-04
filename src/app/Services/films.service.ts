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

  public getTestRequest(): Observable<any> {
    let randomFilm = Math.floor(Math.random() * 600) + 1;
    //randomFilm = 550;
    randomFilm = 364;
    const randomFilmUrl = 'https://api.themoviedb.org/3/movie/'+ randomFilm;
    const filmsList = 'https://api.themoviedb.org/3/movie/top_rated';
    const url = randomFilmUrl + this.key;
    return this.https.get(url);
  }
}
