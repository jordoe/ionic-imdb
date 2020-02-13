import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyfilmsPage } from './myfilms.page';

const routes: Routes = [
  {
    path: '',
    component: MyfilmsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyfilmsPageRoutingModule {}
