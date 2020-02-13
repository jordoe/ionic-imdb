import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FilmsService } from 'src/app/Services/films.service';

@Component({
  selector: 'app-details-film',
  templateUrl: './details-film.page.html',
  styleUrls: ['./details-film.page.scss'],
})
export class DetailsFilmPage implements OnInit {

  public seenState: number;

  private filmId: string;
  public film: any;
  public backdropUrl: string;
  public filmGenres: any[];
  public cast: any[];
  public director: any;

  public similarFilms: any[];

  public titleSticky: boolean = false;

  constructor(private route: ActivatedRoute, private filmsService: FilmsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.filmId = params.get('id');
      this.filmsService.initSeenStatesStorage();
      this.filmsService.checkSeenState(this.filmId).subscribe((response: any) => {
        this.seenState = response;
      });
      this.filmsService.getFilmDetails(this.filmId).subscribe((response: any) => {
        this.film = response;
        console.log(response);
        this.filmGenres = response.genres.map(x => x.name);
        if (this.film.backdrop_path !== null) {
          this.backdropUrl = 'https://image.tmdb.org/t/p/original' + this.film.backdrop_path;
        } else {
          this.backdropUrl = null;
        }
      });
      this.filmsService.getFilmCredits(this.filmId).subscribe((response: any) => {
        this.cast = response.cast;
        response.crew.forEach(member => {
          if(member.department === "Directing" && member.job === "Director") {
            this.director = member;
          }
        });
      });
      this.filmsService.getSimilarFilms(this.filmId).subscribe((response: any) => {
        this.similarFilms = response.results.filter(x => x.poster_path !== null);
      });
    });
  }

  public setFilmState(state: number): void {
    this.filmsService.setState(state, this.filmId);
    this.seenState = state;
  }

  public getActorImageUrl(id: number): string {
    return 'https://image.tmdb.org/t/p/w185' + this.cast[id].profile_path;
  }

  public hasActorImage(id: number): boolean {
    return this.cast[id].profile_path !== null;
  }

  public getSimilarFilmPoster(id: number): string {
    return 'https://image.tmdb.org/t/p/w342' + this.similarFilms[id].poster_path;
  }

  public truncStr(str: string, at: number): string {
    return (str.length > at) ? str.substr(0, at-1) + '...' : str;
  }
}
