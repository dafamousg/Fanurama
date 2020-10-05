import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/view/home/home.component';
import { CharacterItemComponent } from './components/itemView/character-item/character-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { CharactersComponent } from './components/view/characters/characters.component';
import { NotCharactersPipe } from './pipes/not-characters.pipe';
import { EpisodesComponent } from './components/view/episodes/episodes.component';
import { EpisodeItemComponent } from './components/itemView/episode-item/episode-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharacterItemComponent,
    HeaderComponent,
    CharactersComponent,
    NotCharactersPipe,
    EpisodesComponent,
    EpisodeItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
