import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { CategoriesComponent } from './categories/categories.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'permits', component: ProjectComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: 'categories/MJApi', component: CategoriesComponent},
  {path: 'categories/PermitsApi', component: CategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


