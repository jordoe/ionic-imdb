import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/Services/films.service';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.page.html',
  styleUrls: ['./random.page.scss'],
})
export class RandomPage implements OnInit {

  public filmImage: string;
  public filmGenres: string[];
  public film: any;

  //-------------- Filters variables:
  public filtersModalOpened: boolean = false;

  private filterDefaults: string[][];
  public filters: string[][] = [];
  public forToFiltersNames: string[][] = [];

  public filterActiveArr = [false, false, false, false];

  public genres;
  public selectedGenres = [];
  public deselectAll = false;
  //-------------- Filters variables end

  public errorModalOpened: boolean = false;

  constructor(private filmsService: FilmsService, private pickerCtrl: PickerController) { }

  ngOnInit() {
    this.filterDefaults = [['2000', '2020'], ['4', '10'], ['G', 'PG-13'], ['English']];
    this.forToFiltersNames = [['Release Year', 'years'], ['Vote Average', 'votes'],['Age Certification', 'califications']];
    this.filterDefaults.forEach((element, i) => {this.filters.push(this.filterDefaults[i])});

    this.filmsService.getDefaultFilm().subscribe((response: any) => {
      this.filmImage = 'https://image.tmdb.org/t/p/original'+response.poster_path;
      this.filmGenres = response.genres.map(x => x.name);
      this.film = response;
    })

    this.filmsService.getGenresList().subscribe((response: any) => {
      this.genres = response.genres;
      this.genres.forEach(genre => {
        this.selectedGenres.push(false);
      });
    });
  }

  public pressRandom(): void {
    let activeFilters = this.getFiltersIfActive();
    let activeGenres = this.getGenresNumbersIfActive();
    activeFilters[3] = this.parseLang(activeFilters[3]);
    //console.log(activeFilters);
    //console.log(activeGenres);
    this.filmsService.getRandomFilm(activeFilters[0][0],activeFilters[0][1],activeFilters[1][0],activeFilters[1][1],activeFilters[2][0],activeFilters[2][1],activeGenres,activeFilters[3][0]).subscribe((response: any) => {
      if (response !== null) {
        this.filmImage = 'https://image.tmdb.org/t/p/original' + response.poster_path;
        this.filmGenres = response.genres.map(x => x.name);
        this.film = response;
      } else {
        this.showErrorModal();
      }
      //console.log(response);
    })
  }

  public showErrorModal(): void {
    this.errorModalOpened = !this.errorModalOpened;
  }

  public pressFiltersButton(): void {
    this.filtersModalOpened = !this.filtersModalOpened;
  }

  public pressFilter(index: number): void {
    this.filterActiveArr[index] = !this.filterActiveArr[index];
  }

  public setAllGenres(b: boolean) {
    this.selectedGenres.forEach((selected, i) => {
      this.selectedGenres[i] = b;
    });
    this.checkIfDeselectAll();
  }

  private checkIfDeselectAll() {
    let selectedG = [];
    this.selectedGenres.forEach(selected => {
      if(selected) {
        selectedG.push(true);
      }
    });
    this.deselectAll = (selectedG.length > 3);
  }

  public pressGenre(index: number): void {
    this.selectedGenres[index] = !this.selectedGenres[index];
    this.checkIfDeselectAll();
  }

  private getFiltersIfActive(): string[][] {
    let activeFilters = [];
    this.filters.forEach((element, i) => {
      activeFilters.push([]);
      this.filters[i].forEach((element, index) => {
        activeFilters[i].push(this.filters[i].values)
      });
    });
    this.filters.forEach((filter, i) => {
      if (!this.filterActiveArr[i]) {
        this.filters[i].forEach((elem, index) => {
          activeFilters[i][index] = null;
        });
      } else {
        this.filters[i].forEach((elem, index) => {
          let value = this.filters[i][index];
          activeFilters[i][index] = value;
        });
      }
    });
    return activeFilters;
  }

  private getGenresNumbersIfActive() {
    let activeGenres = [];
    this.selectedGenres.forEach((selected, i) => {
      if(selected) {
        activeGenres.push(this.genres[i].id);
      }
    });
    return activeGenres;
  }

  private setDefaultFilterContent(){
    this.filters.forEach((filter, i) => {
      if (this.filterActiveArr[i] === false) {
        this.filters[i] = this.filterDefaults[i];
      }
    });
  }

  async showPicker(option: string) {
    let optionsArr;
    let selectedFilter;
    switch (option) {
      case 'language':
        optionsArr = this.getLanguagesArr();
        selectedFilter = 0;
        break;
      default:
        break;
    }
    let opts: PickerOptions = {
      buttons: [
        {
          text: 'Done'
        }
      ],
      columns: [
        {
          name: 'language',
          options: optionsArr
        }
      ]
    };
    const arr: string[] = []
    let picker = await this.pickerCtrl.create(opts);
    picker.columns[0].selectedIndex = optionsArr.findIndex(x => x.text == this.filters[selectedFilter][0].toString());
    picker.present();
    picker.onDidDismiss().then(async data => {
      let value = await picker.getColumn('language');
      arr.push(value.options[value.selectedIndex].text);
      this.setPickerValues(option, arr);
    })
  }

  async showDoublePicker(option: string) {
    let optionsGteArr;
    let optionsLteArr;
    let selectedFilter;
    switch (option) {
      case 'years':
        optionsGteArr = this.getYearsArr('gte')
        optionsLteArr = this.getYearsArr('lte')
        selectedFilter = 0;
        break;
      case 'votes':
        optionsGteArr = this.getVotesArr()
        optionsLteArr = optionsGteArr;
        selectedFilter = 1;
        break;
      case 'califications':
        optionsGteArr = this.getCalificationArr()
        optionsLteArr = optionsGteArr;
        selectedFilter = 2;
        break;
      default:
        break;
    }
    let opts: PickerOptions = {
      buttons: [
        {
          text: 'Done'
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
    const arr: string[] = []
    let picker = await this.pickerCtrl.create(opts);
    picker.columns[0].selectedIndex = optionsGteArr.findIndex(x => x.text == this.filters[selectedFilter][0].toString());
    picker.columns[1].selectedIndex = optionsLteArr.findIndex(x => x.text == this.filters[selectedFilter][1].toString());
    picker.present();
    picker.onDidDismiss().then(async data => {
      let from = await picker.getColumn('from');
      let to = await picker.getColumn('to');
      arr.push(from.options[from.selectedIndex].text);
      arr.push(to.options[to.selectedIndex].text);
      this.setPickerValues(option, arr);
    })
  }

  private setPickerValues(option: string, arr: string[]) {
    switch (option) {
      case 'years':
        this.filters[0][0] = arr[0];
        this.filters[0][1] = arr[1];
        break;
      case 'votes':
        this.filters[1][0] = arr[0];
        this.filters[1][1] = arr[1];
        break;
      case 'califications':
        this.filters[2][0] = arr[0];
        this.filters[2][1] = arr[1];
        break;
      case 'language':
        this.filters[3][0] = arr[0];
        break;
      default:
        break;
    }
  }

  private getYearsArr(direction: string): number[] {
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

  private getVotesArr(): number[] {
    let arr = [];
    let from = 0;
    let to = 10;
    for (let i=from; i<=to; i++) {
      const obj = {
        text: i.toString(),
        value: i
      }
      arr.push(obj);
    }
    return arr;
  }

  private getCalificationArr(): string[] {
    let arr: any[] = ['G', 'PG', 'PG-13', 'R', 'NC-17'];
    arr = arr.map(x => {return {text: x, value: x}});
    return arr;
  }

  private getLanguagesArr(): string[] {
    let arr: any[] = ['English', 'Spanish', 'French', 'Japanese', 'Turkish', 'Hindi'];
    arr = arr.map(x => {return {text: x, value: x}});
    return arr;
  }

  private parseLang(arr: string[]): string[] {
    let result = [];
    switch (arr[0]) {
      case 'English':
        result.push('en');
        break;
      case 'Spanish':
        result.push('es');
        break;
      case 'French':
        result.push('fr');
        break;
      case 'Japanese':
        result.push('ja');
        break;
      case 'Turkish':
        result.push('tr');
        break;
      case 'Hindi':
        result.push('hi');
        break;
      default:
        break;
    }
    return result;
  }

  public truncStr(str: string, at: number): string {
    return (str.length > at) ? str.substr(0, at-1) + '...' : str;
  }
}
