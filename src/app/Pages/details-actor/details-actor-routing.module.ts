import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsActorPage } from './details-actor.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsActorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsActorPageRoutingModule {}
