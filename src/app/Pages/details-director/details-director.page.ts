import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FilmsService } from 'src/app/Services/films.service';

@Component({
  selector: 'app-details-director',
  templateUrl: './details-director.page.html',
  styleUrls: ['./details-director.page.scss'],
})
export class DetailsDirectorPage implements OnInit {

  private directorId: string;
  public director: any;

  public directorImages: any[];
  public directorFilms: any[];

  constructor(private route: ActivatedRoute, private filmsService: FilmsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.directorId = params.get('id');
      this.filmsService.getActorDetails(this.directorId).subscribe((response: any) => {
        this.director = response;
        //console.log(this.director);
      });
      this.filmsService.getActorImages(this.directorId).subscribe((response: any) => {
        this.directorImages = response.profiles;
        //console.log(this.directorImages);
      });
      this.filmsService.getActorFilms(this.directorId).subscribe((response: any) => {
        this.directorFilms = response.crew;
        this.directorFilms = this.directorFilms.filter(x => x.department === "Directing" && x.job === "Director").filter(x => x.poster_path !== null);
        console.log(this.directorFilms);
      });
    });
  }

  public getActorMainImageUrl(): string {
    return 'https://image.tmdb.org/t/p/original' + this.director.profile_path;
  }

  public getActorImageUrl(id: number): string {
    return 'https://image.tmdb.org/t/p/original' + this.directorImages[id].file_path;
  }

  public getActorAge(): number {
    let dt = new Date();
    let curretnYear = dt.getFullYear();
    let directorBirthday = parseInt(this.director.birthday.split('-')[0]);
    return curretnYear - directorBirthday;
  }

  public getFilmPoster(id: number): string {
    return 'https://image.tmdb.org/t/p/original' + this.directorFilms[id].poster_path;
  }

  public hasFilmPoster(id: number): boolean {
    return this.directorFilms[id].poster_path !== null;
  }
}
