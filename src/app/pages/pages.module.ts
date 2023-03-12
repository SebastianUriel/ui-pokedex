import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BerriesComponent } from './berries/berries.component';
import { ContestsComponent } from './contests/contests.component';
import { EncountersComponent } from './encounters/encounters.component';
import { EvolutionComponent } from './evolution/evolution.component';
import { GamesComponent } from './games/games.component';
import { ItemsComponent } from './items/items.component';
import { LocationsComponent } from './locations/locations.component';
import { MachinesComponent } from './machines/machines.component';
import { MovesComponent } from './moves/moves.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    BerriesComponent,
    ContestsComponent,
    EncountersComponent,
    EvolutionComponent,
    GamesComponent,
    ItemsComponent,
    LocationsComponent,
    MachinesComponent,
    MovesComponent,
    PokemonComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BerriesComponent,
    ContestsComponent,
    EncountersComponent,
    EvolutionComponent,
    GamesComponent,
    ItemsComponent,
    LocationsComponent,
    MachinesComponent,
    MovesComponent,
    PokemonComponent,
    HomeComponent
  ]
})
export class PagesModule { }
