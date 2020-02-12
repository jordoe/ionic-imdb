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

  private sortPage: number = 1;
  public searchPage: number = 1;

  public currentPage: number = 1;
  public results: any[];

  public noResults: boolean = false;

  private currentInput: string = '';
  public currentMaxPages: number = 1;

  public genres;
  public selectedGenres = [];
  public genresContainerOpened: boolean = false;

  private datesFilter: string[] = ['2000', '2020'];
  private sortByFilter: string = 'Most Popular First';

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
    this.sortPage = 1;
    this.refreshResults();
  }

  private refreshResults(): void {
    const activeGenres = this.filtersActive[0] ? this.parseGenres() : null;
    const activeDateGte = this.filtersActive[1] ? this.datesFilter[0] : null;
    const activeDateLte = this.filtersActive[1] ? this.datesFilter[1] : null;
    const activeSortBy = this.filtersActive[2] ? this.parseSortBy() : null;
    this.filmsService.getFilmsResults(this.currentPage, activeDateGte, activeDateLte, activeGenres, false, activeSortBy).subscribe((response: any) => {
      //console.log(response);
      this.results = response.results.filter(x => x.poster_path !== null);
      this.currentMaxPages = response.total_pages;
      this.noResults = response.total_results === 0;
    });
  }

  private refresResultsGetAll(): void {
    this.filmsService.getFilmsResults(this.currentPage).subscribe((response: any) => {
      this.results = response.results;
      this.currentMaxPages = response.total_pages;
    })
  }

  public pressSearchType(id: number): void {
    this.noResults = false;
    if (id === 0 && this.searchType !== id) {
      this.currentPage = this.sortPage;
      this.refreshResults();
    } else if (id === 1 && this.searchType !== id) {
      this.currentPage = this.searchPage;
      this.refresResultsGetAll();
    }
    this.searchType = id;
  }

  public inputChange(e: any) {
    //console.log(e.detail.target.value);
    if (e.detail === null || e.detail.target.value === '') {
      this.filmsService.getFilmsResults().subscribe((response: any) => {
        this.results = response.results.filter(x => x.poster_path !== null);
        this.currentMaxPages = response.total_pages;
        this.currentPage = 1;
        this.searchPage = 1;
        this.noResults = false;
      });
    } else {
      this.currentInput = e.detail.target.value;
      this.filmsService.searchFilms(this.currentInput).subscribe((response: any) => {
        this.results = response.results.filter(x => x.poster_path !== null);
        this.currentMaxPages = response.total_pages;
        this.currentPage = 1;
        this.searchPage = 1;
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
    return this.currentPage !== this.currentMaxPages && this.currentMaxPages !== 0;
  }

  public pressArrow(dir: string) {
    let direction = 0;
    const cntxt = this;
    switch (dir) {
      case 'l':
        direction = -1;
        if (this.canLeft()) {
          movePage();
        }
        break;
      case 'r':
        direction = 1;
        if (this.canRight()) {
          movePage();
        }
        break;    
      default:
        break;
    }
    function movePage() {
      cntxt.currentPage += direction;
      if (cntxt.searchType === 0) {
        cntxt.sortPage += direction;
        cntxt.refreshResults();
      } else if (cntxt.searchType === 1) {      
        cntxt.searchPage += direction;      
        cntxt.refresResultsGetAll();
      }
    }
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
    let arr: any[] = ['Most Popular First', 'Less Popular First', 'Latest Released First', 'Oldest First', 'Best Score First', 'Worst Score First'];
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
      case 'Most Popular First':
        activeSortBy = 'popularity.desc';
        break;
      case 'Less Popular First':
        activeSortBy = 'popularity.asc';
        break;
      case 'Latest Released First':
        activeSortBy = 'release_date.desc';
        break;
      case 'Oldest First':
        activeSortBy = 'release_date.asc';
        break;
      case 'Best Score First':
        activeSortBy = 'vote_average.desc';
        break;
      case 'Worst Score First':
        activeSortBy = 'vote_average.asc';
        break;
    
      default:
        activeSortBy = 'popularity.desc';
        break;
    }
    return activeSortBy;
  }
}
