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
  public film: any;

  //Filters variables:
  private filterDefaults: string[][];
  public filters: string[][] = [];

  public filterActiveArr = [false, false];

  constructor(private filmsService: FilmsService, private pickerCtrl: PickerController) { }

  ngOnInit() {
    this.filterDefaults = [['1900', '2021'], ['0', '10']];
    this.filterDefaults.forEach((element, i) => {this.filters.push(this.filterDefaults[i])});

    this.filmsService.getDefaultFilm().subscribe((response: any) => {
      this.filmImage = 'https://image.tmdb.org/t/p/original'+response.poster_path;
      this.film = response;
      //console.log(response);
    })
  }

  public pressRandom(): void {
    let activeFilters = this.getFiltersIfActive();
    this.filmsService.getRandomFilm(activeFilters[0][0],activeFilters[0][1],activeFilters[1][0],activeFilters[1][1],null,'PG-13').subscribe((response: any) => {
      this.filmImage = 'https://image.tmdb.org/t/p/original'+response.poster_path;
      this.film = response;
      //console.log(response);
    })
  }

  public pressFilter(index: number) {
    this.filterActiveArr[index] = !this.filterActiveArr[index];
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

  private setDefaultFilterContent(){
    this.filters.forEach((filter, i) => {
      if (this.filterActiveArr[i] === false) {
        this.filters[i] = this.filterDefaults[i];
      }
    });
  }

  async showPicker(option: string) {
    let optionsGteArr;
    let optionsLteArr;
    switch (option) {
      case 'years':
        optionsGteArr = this.getYearsArr('gte')
        optionsLteArr = this.getYearsArr('lte')
        break;
      case 'votes':
      optionsGteArr = this.getVotesArr()
      optionsLteArr = optionsGteArr;
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
    picker.columns[1].selectedIndex = optionsLteArr.length;
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

  public truncStr(str: string, at: number): string {
    return (str.length > at) ? str.substr(0, at-1) + '...' : str;
  }
}