import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsFilmPage } from './details-film.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsFilmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsFilmPageRoutingModule {}
