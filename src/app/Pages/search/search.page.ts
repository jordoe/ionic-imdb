import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/Services/films.service';
import { PickerController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  public searchType = 1;

  public currentPage: number = 1;
  public results: any[];

  public noResults: boolean = false;

  constructor(private filmsService: FilmsService, private pickerCtrl: PickerController) { }

  ngOnInit() {
    this.filmsService.getFilmsResults().subscribe((response: any) => {
      this.results = response.results;
      //console.log(response);
    })
  }

  public getFilmPoster(id: number): string {
    return 'https://image.tmdb.org/t/p/original' + this.results[id].poster_path;
  }

  public inputChange(e: any) {
    //console.log(e.detail.target.value);
    if (e.detail === null || e.detail.target.value === '') {
      this.filmsService.getFilmsResults().subscribe((response: any) => {
        this.results = response.results;
      });
    } else {
      const input = e.detail.target.value;
      this.filmsService.searchFilms(input).subscribe((response: any) => {
        this.results = response.results.filter(x => x.poster_path !== null);
        if (response.total_results === 0) {
          this.noResults = true;
        } else {
          this.noResults = false;
        }
      })
    }
  }
}
