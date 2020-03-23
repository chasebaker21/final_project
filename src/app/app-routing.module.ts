import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { MjCategoryComponent } from './mj-category/mj-category.component';
import { BuildingCategoryComponent } from './building-category/building-category.component';
import { AboutComponent } from './about/about.component';
import { MjCategoryListComponent } from './mj-category-list/mj-category-list.component';
import { BpCategoryListComponent } from './bp-category-list/bp-category-list.component';
import { MapLocationsComponent } from './map-locations/map-locations.component';

const routes: Routes = [
  {
    path: 'bpCategoryList',
    component: BpCategoryListComponent
  },
  
  {
    path: 'mjCategoryList',
    component: MjCategoryListComponent
  },
  
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  },
  {
    path: 'mjCategory',
    component: MjCategoryComponent
  },
  {
    path: 'buildingCategory',
    component: BuildingCategoryComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'map-locations',
    component: MapLocationsComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


