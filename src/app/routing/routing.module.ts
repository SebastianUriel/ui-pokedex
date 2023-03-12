import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PokemonComponent } from '../pages/pokemon/pokemon.component';
import { MovesComponent } from '../pages/moves/moves.component';
import { MachinesComponent } from '../pages/machines/machines.component';
import { LocationsComponent } from '../pages/locations/locations.component';
import { ItemsComponent } from '../pages/items/items.component';
import { GamesComponent } from '../pages/games/games.component';
import { EvolutionComponent } from '../pages/evolution/evolution.component';
import { EncountersComponent } from '../pages/encounters/encounters.component';
import { ContestsComponent } from '../pages/contests/contests.component';
import { BerriesComponent } from '../pages/berries/berries.component';
import { PagesModule } from '../pages/pages.module';
import { HomeComponent } from '../pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'berries', component: BerriesComponent },
  { path: 'contests', component: ContestsComponent },
  { path: 'encounters', component: EncountersComponent },
  { path: 'evolution', component: EvolutionComponent },
  { path: 'games', component: GamesComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'machines', component: MachinesComponent },
  { path: 'moves', component: MovesComponent },
  { path: 'pokemon', component: PokemonComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
