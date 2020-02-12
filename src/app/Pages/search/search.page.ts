import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/Services/films.service';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';

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

  public genres;
  public selectedGenres = [];
  public genresContainerOpened: boolean = false;

  private datesFilter: string[] = ['2000', '2020'];
  private sortByFilter: string = 'Popularity Desc.';

  public filtersActive: boolean[] = [false, false, false];

  constructor(private filmsService: FilmsService, private pickerCtrl: PickerController) { }

  ngOnInit() {
    this.filmsService.getFilmsResults().subscribe((response: any) => {
      this.results = response.results;
      this.currentMaxPages = response.total_pages;
      //console.log(response);
    })
    this.filmsService.getGenresList().subscribe((response: any) => {
      this.genres = response.genres;
      this.genres.forEach(genre => {
        this.selectedGenres.push(false);
      });
    });
  }

  public getFilmPoster(id: number): string {
    return 'https://image.tmdb.org/t/p/w154' + this.results[id].poster_path;
  }

  public applyFilter(): void {
    this.currentPage = 1;
    this.refreshResults();
  }

  private refreshResults(): void {
    const activeGenres = this.filtersActive[0] ? this.parseGenres() : null;
    const activeDateGte = this.filtersActive[1] ? this.datesFilter[0] : null;
    const activeDateLte = this.filtersActive[1] ? this.datesFilter[0] : null;
    const activeSortBy = this.filtersActive[2] ? this.parseSortBy() : null;
    this.filmsService.getFilmsResults(this.currentPage, activeDateGte, activeDateLte, activeGenres, false, activeSortBy).subscribe((response: any) => {
      if (response !== null) {
        this.results = response.results.filter(x => x.poster_path !== null);
        this.currentMaxPages = response.total_pages;
      }
    });
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
    this.refreshResults();
  }

  public pressGenresButton(): void {
    if (this.filtersActive[0] === false) {
      this.setGenresOpened();
    } else {
      this.filtersActive[0] = false;
      this.currentPage = 1;
      this.refreshResults();
    }
  }

  public pressGenresOkayButton(): void {
    this.filtersActive[0] = true;
    this.applyFilter();
    this.genresContainerOpened = false;
  }

  public pressDatesButton(): void {
    if (this.filtersActive[1] === false) {
      this.showDatesPicker();
    } else {
      this.filtersActive[1] = false;
      this.currentPage = 1;
      this.refreshResults();
    }
  }

  public pressSortByButton(): void {
    if (this.filtersActive[2] === false) {
      this.showSortByPicker();
    } else {
      this.filtersActive[2] = false;
      this.currentPage = 1;
      this.refreshResults();
    }
  }

  public setGenresOpened(): void {
    this.genresContainerOpened = !this.genresContainerOpened;
  }

  public pressGenre(index: number): void {
    this.selectedGenres[index] = !this.selectedGenres[index];
  }

  async showDatesPicker() {
    let optionsGteArr = this.getYearsArr('gte');
    let optionsLteArr = this.getYearsArr('lte');
    let opts: PickerOptions = {
      buttons: [
        {
          text: 'Done',
          role: 'done',
          handler: value => {
            this.datesFilter[0] = value.from.text;
            this.datesFilter[1] = value.to.text;
            this.filtersActive[1] = true;
            this.applyFilter();
            picker.dismiss(value, "confirm");
          }
        }
      ],
      columns: [
        {
          name: 'from',
          options: optionsGteArr
        },
        {
          name: 'to',
          options: optionsLteArr
        }
      ]
    };
    let picker = await this.pickerCtrl.create(opts);
    picker.columns[0].selectedIndex = optionsGteArr.findIndex(x => x.text == this.datesFilter[0].toString());
    picker.columns[1].selectedIndex = optionsLteArr.findIndex(x => x.text == this.datesFilter[1].toString());
    picker.present();
  }

  private getYearsArr(direction: string): any[] {
    let arr = [];
    let from;
    let to;
    switch (direction) {
      case 'gte':
        from = 1900;
        to = 2020;
        break;
      case 'lte':
        from = 1940;
        to = 2026;
        break;    
      default:
        break;
    }
    for (let i=from; i<=to; i++) {
      const obj = {
        text: i.toString(),
        value: i
      }
      arr.push(obj);
    }
    return arr;
  }

  async showSortByPicker() {
    let optionsArr = this.getSortByArr();
    let opts: PickerOptions = {
      buttons: [
        {
          text: 'Done',
          role: 'done',
          handler: value => {
            this.sortByFilter = value.sortby.text;
            this.filtersActive[2] = true;
            this.applyFilter();
            picker.dismiss(value, "confirm");
          }
        }
      ],
      columns: [
        {
          name: 'sortby',
          options: optionsArr
        }
      ]
    };
    let picker = await this.pickerCtrl.create(opts);
    picker.columns[0].selectedIndex = optionsArr.findIndex(x => x.text == this.sortByFilter.toString());
    picker.present();
  }

  private getSortByArr(): any[] {
    let arr: any[] = ['Popularity Desc.', 'Popularity Asc.', 'Release Date Desc.', 'Release Date Asc.', 'Vote Average Desc.', 'Vote Average Asc.'];
    arr = arr.map(x => {return {text: x, value: x}});
    return arr;
  }

  private parseGenres(): number[] {
    let activeGenres = [];
    this.selectedGenres.forEach((selected, i) => {
      if(selected) {
        activeGenres.push(this.genres[i].id);
      }
    });
    return activeGenres;
  }

  private parseSortBy(): string {
    let activeSortBy;
    switch (this.sortByFilter) {
      case 'Popularity Desc.':
        activeSortBy = 'popularity.desc';
        break;
      case 'Popularity Asc.':
        activeSortBy = 'popularity.asc';
        break;
      case 'Release Date Desc.':
        activeSortBy = 'release_date.desc';
        break;
      case 'Release Date Asc.':
        activeSortBy = 'release_date.asc';
        break;
      case 'Vote Average Desc.':
        activeSortBy = 'vote_average.desc';
        break;
      case 'Vote Average Asc.':
        activeSortBy = 'vote_average.asc';
        break;
    
      default:
        activeSortBy = 'popularity.desc';
        break;
    }
    return activeSortBy;
  }
}
