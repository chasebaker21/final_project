import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ProjectComponent } from './project/project.component';
import { VoteCommentComponent } from './vote-comment/vote-comment.component';
import { HttpClientModule } from '@angular/common/http';
import { MjCategoryComponent } from './mj-category/mj-category.component';
import { BuildingCategoryComponent } from './building-category/building-category.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoritesComponent,
    ProjectComponent,
    VoteCommentComponent,
    MjCategoryComponent,
    BuildingCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
