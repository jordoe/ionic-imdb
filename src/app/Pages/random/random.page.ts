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
  public voteAvg = ['0', '10'];
  public releaseYear = ['1900', '2021'];

  public filterActiveArr = [false, false];

  constructor(private filmsService: FilmsService, private pickerCtrl: PickerController) { }

  ngOnInit() {
    this.filmsService.getDefaultFilm().subscribe((response: any) => {
      this.filmImage = 'https://image.tmdb.org/t/p/original'+response.poster_path;
      this.film = response;
      //console.log(response);
    })
  }

  public pressRandom(): void {
    this.filmsService.getRandomFilm(this.voteAvg[0],this.voteAvg[1],this.releaseYear[0],this.releaseYear[1],null,'PG-13').subscribe((response: any) => {
      this.filmImage = 'https://image.tmdb.org/t/p/original'+response.poster_path;
      this.film = response;
      //console.log(response);
    })
  }

  public pressFilter(index: number) {
    this.filterActiveArr[index] = !this.filterActiveArr[index];
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
          text: 'Cancel',
          role: 'cancel'
        },
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
        this.releaseYear[0] = arr[0];
        this.releaseYear[1] = arr[1];
        break;
      case 'votes':
        this.voteAvg[0] = arr[0];
        this.voteAvg[1] = arr[1];
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
