import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/view/home/home.component';
import {CharactersComponent} from './components/view/characters/characters.component';
import {EpisodesComponent} from './components/view/episodes/episodes.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'characters', component: CharactersComponent},
  {path: 'episodes', component:EpisodesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
