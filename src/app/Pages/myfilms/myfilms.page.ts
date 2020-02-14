import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/Services/films.service';

@Component({
  selector: 'app-myfilms',
  templateUrl: './myfilms.page.html',
  styleUrls: ['./myfilms.page.scss'],
})
export class MyfilmsPage implements OnInit {

  public tabSelected: number = 0;

  public filmsArrs: any[] = [0, 0, 0];

  constructor(private filmsService: FilmsService) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.filmsService.initSeenStatesStorage();
    this.filmsService.getSavedFilmsLists(0).subscribe((response: any) => {
      this.filmsArrs[0] = response;
    });
    this.filmsService.getSavedFilmsLists(1).subscribe((response: any) => {
      this.filmsArrs[1] = response;
    });
    this.filmsService.getSavedFilmsLists(2).subscribe((response: any) => {
      this.filmsArrs[2] = response;
    });
  }

  public presstab(slide, tab: number): void {
    this.tabSelected = tab;
    slide.slideTo(tab, 200);
    this.refreshFilmList();
  }

  public slideChange(slide): void {
    slide.getActiveIndex().then(index => {
      this.tabSelected = index;
    });
  }

  public getFilmPoster(path: number): string {
    return 'https://image.tmdb.org/t/p/w154' + path;
  }

  public truncStr(str: string, at: number): string {
    return (str.length > at) ? str.substr(0, at-1) + '...' : str;
  }
}
