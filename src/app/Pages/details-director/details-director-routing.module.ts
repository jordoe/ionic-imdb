import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsDirectorPage } from './details-director.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsDirectorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsDirectorPageRoutingModule {}
