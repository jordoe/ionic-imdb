import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/Services/films.service';
import { PickerController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  public currentPage: number = 1;
  public results: any[];

  constructor(private filmsService: FilmsService, private pickerCtrl: PickerController) { }

  ngOnInit() {
    this.filmsService.getFilmsResults().subscribe((response: any) => {
      this.results = response.results;
      console.log(response);
    })
  }

  public getFilmPoster(id: number): string {
    return 'https://image.tmdb.org/t/p/original' + this.results[id].poster_path;
  }
}
