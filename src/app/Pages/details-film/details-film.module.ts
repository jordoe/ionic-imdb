import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsFilmPageRoutingModule } from './details-film-routing.module';

import { DetailsFilmPage } from './details-film.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsFilmPageRoutingModule
  ],
  declarations: [DetailsFilmPage]
})
export class DetailsFilmPageModule {}
