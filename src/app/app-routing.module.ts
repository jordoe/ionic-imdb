import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'random', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./Pages/home/home.module').then( m => m.HomePageModule)},
  {path: 'random', loadChildren: () => import('./Pages/random/random.module').then( m => m.RandomPageModule)},
  {path: 'details-film', loadChildren: () => import('./Pages/details-film/details-film.module').then( m => m.DetailsFilmPageModule)},
  {path: 'details-film/:id', loadChildren: () => import('./Pages/details-film/details-film.module').then( m => m.DetailsFilmPageModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
