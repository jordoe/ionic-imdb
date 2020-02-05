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
  }
}
