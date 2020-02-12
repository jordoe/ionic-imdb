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

  private currentInput: string = '';
  private currentMaxPages: number = 1;

  constructor(private filmsService: FilmsService, private pickerCtrl: PickerController) { }

  ngOnInit() {
    this.filmsService.getFilmsResults().subscribe((response: any) => {
      this.results = response.results;
      this.currentMaxPages = response.total_pages;
      //console.log(response);
    })
  }

  public getFilmPoster(id: number): string {
    return 'https://image.tmdb.org/t/p/w154' + this.results[id].poster_path;
  }

  public inputChange(e: any) {
    //console.log(e.detail.target.value);
    if (e.detail === null || e.detail.target.value === '') {
      this.filmsService.getFilmsResults().subscribe((response: any) => {
        this.results = response.results.filter(x => x.poster_path !== null);
        this.currentMaxPages = response.total_pages;
        this.currentPage = 1;
        this.noResults = false;
      });
    } else {
      this.currentInput = e.detail.target.value;
      this.filmsService.searchFilms(this.currentInput).subscribe((response: any) => {
        this.results = response.results.filter(x => x.poster_path !== null);
        this.currentMaxPages = response.total_pages;
        this.currentPage = 1;
        if (response.total_results === 0) {
          this.noResults = true;
        } else {
          this.noResults = false;
        }
      })
    }
  }

  private canLeft() {
    return this.currentPage !== 1;
  }

  private canRight() {
    return this.currentPage !== this.currentMaxPages;
  }

  public pressArrow(dir: string) {
    switch (dir) {
      case 'l':
        if (this.canLeft()) {
          this.currentPage -= 1;
        }
        break;
      case 'r':
        if (this.canRight()) {
          this.currentPage += 1;
        }
        break;    
      default:
        break;
    }
    this.filmsService.getFilmsResults(this.currentPage).subscribe((response: any) => {
      this.results = response.results.filter(x => x.poster_path !== null);
    });
  }
}
