import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FilmsService } from 'src/app/Services/films.service';

@Component({
  selector: 'app-details-film',
  templateUrl: './details-film.page.html',
  styleUrls: ['./details-film.page.scss'],
})
export class DetailsFilmPage implements OnInit {

  private filmId: string;
  public film: any;
  public backdropUrl: string;
  public filmGenres: any[];
  public cast: any[];
  public director: any;

  public similarFilms: any[];

  constructor(private route: ActivatedRoute, private filmsService: FilmsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.filmId = params.get('id');
      this.filmsService.getFilmDetails(this.filmId).subscribe((response: any) => {
        this.film = response;
        this.filmGenres = response.genres.map(x => x.name);
        this.backdropUrl = 'https://image.tmdb.org/t/p/original' + this.film.backdrop_path;
        // console.log(this.film);
      });
      this.filmsService.getFilmCredits(this.filmId).subscribe((response: any) => {
        this.cast = response.cast;
        response.crew.forEach(member => {
          if(member.department === "Directing" && member.job === "Director") {
            this.director = member;
          }
        });
        // console.log(this.director);
      });
      this.filmsService.getSimilarFilms(this.filmId).subscribe((response: any) => {
        this.similarFilms = response.results;
        console.log(this.similarFilms);
      });
    });
  }

  public getActorImageUrl(id: number): string {
    return 'https://image.tmdb.org/t/p/original' + this.cast[id].profile_path;
  }

  public getSimilarFilmPoster(id: number): string {
    return 'https://image.tmdb.org/t/p/original' + this.similarFilms[id].poster_path;
  }

}
