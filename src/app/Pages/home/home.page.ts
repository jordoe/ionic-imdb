import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/Services/films.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public imageTest: string;

  constructor(private filmsService: FilmsService) {}

  ngOnInit() {
    this.filmsService.getTestRequest().subscribe((response: any) => {
      //this.imageTest = 'https://image.tmdb.org/t/p/original'+response.poster_path;
      console.log(response);
    })
  }
}
