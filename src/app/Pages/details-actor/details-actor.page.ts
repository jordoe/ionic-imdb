import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FilmsService } from 'src/app/Services/films.service';

@Component({
  selector: 'app-details-actor',
  templateUrl: './details-actor.page.html',
  styleUrls: ['./details-actor.page.scss'],
})
export class DetailsActorPage implements OnInit {

  private actorId: string;
  public actor: any;

  public actorImages: any[];
  public actorFilms: any[];

  constructor(private route: ActivatedRoute, private filmsService: FilmsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.actorId = params.get('id');
      this.filmsService.getActorDetails(this.actorId).subscribe((response: any) => {
        this.actor = response;
      });
      this.filmsService.getActorImages(this.actorId).subscribe((response: any) => {
        this.actorImages = response.profiles;
        //console.log(this.actorImages);
      });
      this.filmsService.getActorFilms(this.actorId).subscribe((response: any) => {
        this.actorFilms = response.cast.filter(x => x.poster_path !== null);
        //console.log(this.actorFilms);
      });
    });
  }

  public getActorMainImageUrl(): string {
    return 'https://image.tmdb.org/t/p/original' + this.actor.profile_path;
  }

  public getActorImageUrl(id: number): string {
    return 'https://image.tmdb.org/t/p/w185' + this.actorImages[id].file_path;
  }

  public getActorAge(): number {
    let dt = new Date();
    let curretnYear = dt.getFullYear();
    let actorBirthday = parseInt(this.actor.birthday.split('-')[0]);
    return curretnYear - actorBirthday;
  }

  public getFilmPoster(id: number): string {
    return 'https://image.tmdb.org/t/p/w342' + this.actorFilms[id].poster_path;
  }

  public hasFilmPoster(id: number): boolean {
    return this.actorFilms[id].poster_path !== null;
  }
}
