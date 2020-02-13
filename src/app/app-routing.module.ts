import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'random', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./Pages/home/home.module').then( m => m.HomePageModule)},
  {path: 'random', loadChildren: () => import('./Pages/random/random.module').then( m => m.RandomPageModule)},
  {path: 'details-film', loadChildren: () => import('./Pages/details-film/details-film.module').then( m => m.DetailsFilmPageModule)},
  {path: 'details-film/:id', loadChildren: () => import('./Pages/details-film/details-film.module').then( m => m.DetailsFilmPageModule)},
  {path: 'details-actor', loadChildren: () => import('./Pages/details-actor/details-actor.module').then( m => m.DetailsActorPageModule)},
  {path: 'details-actor/:id', loadChildren: () => import('./Pages/details-actor/details-actor.module').then( m => m.DetailsActorPageModule)},
  {path: 'details-director', loadChildren: () => import('./Pages/details-director/details-director.module').then( m => m.DetailsDirectorPageModule)},
  {path: 'details-director/:id', loadChildren: () => import('./Pages/details-director/details-director.module').then( m => m.DetailsDirectorPageModule)},  {
    path: 'search',
    loadChildren: () => import('./Pages/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'myfilms',
    loadChildren: () => import('./Pages/myfilms/myfilms.module').then( m => m.MyfilmsPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
