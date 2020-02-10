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

  constructor(private route: ActivatedRoute, private filmsService: FilmsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.filmId = params.get('id');
      this.filmsService.getFilmDetails(this.filmId).subscribe((response: any) => {
        this.film = response;
        this.backdropUrl = 'https://image.tmdb.org/t/p/original' + this.film.backdrop_path;
        //console.log(this.film);
      });
    });
  }

}
