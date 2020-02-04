import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/Services/films.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.page.html',
  styleUrls: ['./random.page.scss'],
})
export class RandomPage implements OnInit {

  public filmImage: string;
  public film: any;

  constructor(private filmsService: FilmsService) { }

  ngOnInit() {
    this.filmsService.getDefaultFilm().subscribe((response: any) => {
      this.filmImage = 'https://image.tmdb.org/t/p/original'+response.poster_path;
      this.film = response;
      console.log(response);
    })
  }

  public pressRandom(): void {
    this.filmsService.getRandomFilm().subscribe((response: any) => {
      this.filmImage = 'https://image.tmdb.org/t/p/original'+response.poster_path;
      this.film = response;
      console.log(response);
    })
  }
}
