import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/Services/films.service';

@Component({
  selector: 'app-myfilms',
  templateUrl: './myfilms.page.html',
  styleUrls: ['./myfilms.page.scss'],
})
export class MyfilmsPage implements OnInit {

  public tabSelected: number = 0;

  public savedFilms: any[];
  public seenFilms: any[];
  public favoriteFilms: any[];

  constructor(private filmsService: FilmsService) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.filmsService.initSeenStatesStorage();
    this.filmsService.getSavedFilmsLists(0).subscribe((response: any) => {
      this.savedFilms = response;
    });
    this.filmsService.getSavedFilmsLists(1).subscribe((response: any) => {
      this.seenFilms = response;
    });
    this.filmsService.getSavedFilmsLists(2).subscribe((response: any) => {
      this.favoriteFilms = response;
    });
  }

  public presstab(tab: number): void {
    this.tabSelected = tab;
    this.refreshFilmList();
  }

  private refreshFilmList() {
     
  }

  public getFilmPoster(path: number): string {
    return 'https://image.tmdb.org/t/p/w154' + path;
  }
}
