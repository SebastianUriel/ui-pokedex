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
import { BerryFlavorsComponent } from '../pages/berries/berry-flavors/berry-flavors.component';
import { BerryFirmnessesComponent } from '../pages/berries/berry-firmnesses/berry-firmnesses.component';
import { ContestTypesComponent } from '../pages/contests/contest-types/contest-types.component';
import { ContestEffectsComponent } from '../pages/contests/contest-effects/contest-effects.component';
import { SuperContestEffectsComponent } from '../pages/contests/super-contest-effects/super-contest-effects.component';
import { EncounterMethodsComponent } from '../pages/encounters/encounter-methods/encounter-methods.component';
import { EncounterConditionsComponent } from '../pages/encounters/encounter-conditions/encounter-conditions.component';
import { EncounterConditionValuesComponent } from '../pages/encounters/encounter-condition-values/encounter-condition-values.component';
import { EvolutionChainsComponent } from '../pages/evolution/evolution-chains/evolution-chains.component';
import { EvolutionTriggersComponent } from '../pages/evolution/evolution-triggers/evolution-triggers.component';
import { GenerationsComponent } from '../pages/games/generations/generations.component';
import { PokedexesComponent } from '../pages/games/pokedexes/pokedexes.component';
import { VersionComponent } from '../pages/games/version/version.component';
import { VersionGroupsComponent } from '../pages/games/version-groups/version-groups.component';
import { ItemAttributesComponent } from '../pages/items/item-attributes/item-attributes.component';
import { ItemCategoriesComponent } from '../pages/items/item-categories/item-categories.component';
import { ItemFlingEffectsComponent } from '../pages/items/item-fling-effects/item-fling-effects.component';
import { ItemPocketsComponent } from '../pages/items/item-pockets/item-pockets.component';
import { LocationAreasComponent } from '../pages/locations/location-areas/location-areas.component';
import { PalParkAreasComponent } from '../pages/locations/pal-park-areas/pal-park-areas.component';
import { RegionsComponent } from '../pages/locations/regions/regions.component';
import { MoveAilmentsComponent } from '../pages/moves/move-ailments/move-ailments.component';
import { MoveBattleStylesComponent } from '../pages/moves/move-battle-styles/move-battle-styles.component';
import { MoveCategoriesComponent } from '../pages/moves/move-categories/move-categories.component';
import { MoveDamageClassesComponent } from '../pages/moves/move-damage-classes/move-damage-classes.component';
import { MoveLearnMethodsComponent } from '../pages/moves/move-learn-methods/move-learn-methods.component';
import { MoveTargetsComponent } from '../pages/moves/move-targets/move-targets.component';
import { AbilitiesComponent } from '../pages/pokemon/abilities/abilities.component';
import { CharacteristicsComponent } from '../pages/pokemon/characteristics/characteristics.component';
import { EggGroupsComponent } from '../pages/pokemon/egg-groups/egg-groups.component';
import { GendersComponent } from '../pages/pokemon/genders/genders.component';
import { GrowthRatesComponent } from '../pages/pokemon/growth-rates/growth-rates.component';
import { NaturesComponent } from '../pages/pokemon/natures/natures.component';
import { PokeathlonStatsComponent } from '../pages/pokemon/pokeathlon-stats/pokeathlon-stats.component';
import { PokemonLocationAreasComponent } from '../pages/pokemon/pokemon-location-areas/pokemon-location-areas.component';
import { PokemonColorsComponent } from '../pages/pokemon/pokemon-colors/pokemon-colors.component';
import { PokemonFormsComponent } from '../pages/pokemon/pokemon-forms/pokemon-forms.component';
import { PokemonHabitatsComponent } from '../pages/pokemon/pokemon-habitats/pokemon-habitats.component';
import { PokemonShapesComponent } from '../pages/pokemon/pokemon-shapes/pokemon-shapes.component';
import { PokemonSpeciesComponent } from '../pages/pokemon/pokemon-species/pokemon-species.component';
import { StatsComponent } from '../pages/pokemon/stats/stats.component';
import { TypesComponent } from '../pages/pokemon/types/types.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'berries',
    component: BerriesComponent,
    children: [
      { path: 'berry-firmnesses', component: BerryFirmnessesComponent },
      { path: 'berry-flavors', component: BerryFlavorsComponent }
    ]
  },
  { 
    path: 'contests', 
    component: ContestsComponent,
    children: [
      { path: 'contest-type', component: ContestTypesComponent },
      { path: 'contest-effect', component: ContestEffectsComponent },
      { path: 'super-contest-effect', component: SuperContestEffectsComponent }
    ]
  },
  { 
    path: 'encounters', 
    component: EncountersComponent,
    children: [
      { path: 'encounter-methods', component: EncounterMethodsComponent },
      { path: 'encounter-conditions', component: EncounterConditionsComponent },
      { path: 'encounter-condition-values', component: EncounterConditionValuesComponent }
    ]
  },
  { 
    path: 'evolution', 
    component: EvolutionComponent,
    children: [
      { path: 'evolution-chains', component: EvolutionChainsComponent },
      { path: 'evolution-triggers', component: EvolutionTriggersComponent }
    ]
  },
  { 
    path: 'games', 
    component: GamesComponent,
    children: [
      { path: 'generations', component: GenerationsComponent },
      { path: 'pokedexes', component: PokedexesComponent },
      { path: 'version', component: VersionComponent },
      { path: 'version-groups', component: VersionGroupsComponent }
    ] 
  },
  { 
    path: 'items', 
    component: ItemsComponent,
    children: [
      { path: 'item-attributes', component: ItemAttributesComponent },
      { path: 'item-categories', component: ItemCategoriesComponent },
      { path: 'item-fling-effects', component: ItemFlingEffectsComponent },
      { path: 'item-pockets', component: ItemPocketsComponent }
    ] 
  },
  { 
    path: 'locations', 
    component: LocationsComponent,
    children: [
      { path: 'location-areas', component: LocationAreasComponent },
      { path: 'pal-park-areas', component: PalParkAreasComponent },
      { path: 'regions', component: RegionsComponent }
    ]
  },
  { 
    path: 'machines', 
    component: MachinesComponent 
  },
  { 
    path: 'moves', 
    component: MovesComponent,
    children: [
      { path: 'move-ailments', component: MoveAilmentsComponent },
      { path: 'move-battle-styles', component: MoveBattleStylesComponent },
      { path: 'move-categories', component: MoveCategoriesComponent },
      { path: 'move-damage-classes', component: MoveDamageClassesComponent },
      { path: 'move-learn-methods', component: MoveLearnMethodsComponent },
      { path: 'move-targets', component: MoveTargetsComponent }
    ] 
  },
  { 
    path: 'pokemon', 
    component: PokemonComponent,
    children: [
      { path: 'abilities', component: AbilitiesComponent },
      { path: 'characteristics', component: CharacteristicsComponent },
      { path: 'egg-groups', component: EggGroupsComponent },
      { path: 'genders', component: GendersComponent },
      { path: 'growth-rates', component: GrowthRatesComponent },
      { path: 'natures', component: NaturesComponent },
      { path: 'pokeathlon-stats', component: PokeathlonStatsComponent },
      { path: 'pokemon-location-areas', component: PokemonLocationAreasComponent },
      { path: 'pokemon-colors', component: PokemonColorsComponent },
      { path: 'pokemon-forms', component: PokemonFormsComponent },
      { path: 'pokemon-habitats', component: PokemonHabitatsComponent },
      { path: 'pokemon-shapes', component: PokemonShapesComponent },
      { path: 'pokemon-species', component: PokemonSpeciesComponent },
      { path: 'stats', component: StatsComponent },
      { path: 'types', component: TypesComponent }
    ] 
  }
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
