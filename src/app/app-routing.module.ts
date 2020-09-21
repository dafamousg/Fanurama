import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/view/home/home.component';
import {CharactersComponent} from './components/view/characters/characters.component';

const routes: Routes = [
  {path: 'characters', component: CharactersComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
