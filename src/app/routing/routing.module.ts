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
    component: BerriesComponent
  },
  { path: 'berries/berry-firmnesses', component: BerryFirmnessesComponent },
  { path: 'berries/berry-flavors', component: BerryFlavorsComponent },
  {
    path: 'contests',
    component: ContestsComponent
  },
  { path: 'contests/contest-type', component: ContestTypesComponent },
  { path: 'contests/contest-effect', component: ContestEffectsComponent },
  { path: 'contests/super-contest-effect', component: SuperContestEffectsComponent },
  {
    path: 'encounters',
    component: EncountersComponent
  },
  { path: 'encounters/encounter-methods', component: EncounterMethodsComponent },
  { path: 'encounters/encounter-conditions', component: EncounterConditionsComponent },
  { path: 'encounters/encounter-condition-values', component: EncounterConditionValuesComponent },
  {
    path: 'evolution',
    component: EvolutionComponent
  },
  { path: 'evolution/evolution-chains', component: EvolutionChainsComponent },
  { path: 'evolution/evolution-triggers', component: EvolutionTriggersComponent },
  {
    path: 'games',
    component: GamesComponent
  },
  { path: 'games/generations', component: GenerationsComponent },
  { path: 'games/pokedexes', component: PokedexesComponent },
  { path: 'games/version', component: VersionComponent },
  { path: 'games/version-groups', component: VersionGroupsComponent },
  {
    path: 'items',
    component: ItemsComponent
  },
  { path: 'items/item-attributes', component: ItemAttributesComponent },
  { path: 'items/item-categories', component: ItemCategoriesComponent },
  { path: 'items/item-fling-effects', component: ItemFlingEffectsComponent },
  { path: 'items/item-pockets', component: ItemPocketsComponent },
  {
    path: 'locations',
    component: LocationsComponent
  },
  { path: 'locations/location-areas', component: LocationAreasComponent },
  { path: 'locations/pal-park-areas', component: PalParkAreasComponent },
  { path: 'locations/regions', component: RegionsComponent },
  {
    path: 'machines',
    component: MachinesComponent
  },
  {
    path: 'moves',
    component: MovesComponent
  },
  { path: 'moves/move-ailments', component: MoveAilmentsComponent },
  { path: 'moves/move-battle-styles', component: MoveBattleStylesComponent },
  { path: 'moves/move-categories', component: MoveCategoriesComponent },
  { path: 'moves/move-damage-classes', component: MoveDamageClassesComponent },
  { path: 'moves/move-learn-methods', component: MoveLearnMethodsComponent },
  { path: 'moves/move-targets', component: MoveTargetsComponent },
  {
    path: 'pokemon',
    component: PokemonComponent
  },
  { path: 'pokemon/abilities', component: AbilitiesComponent },
  { path: 'pokemon/characteristics', component: CharacteristicsComponent },
  { path: 'pokemon/egg-groups', component: EggGroupsComponent },
  { path: 'pokemon/genders', component: GendersComponent },
  { path: 'pokemon/growth-rates', component: GrowthRatesComponent },
  { path: 'pokemon/natures', component: NaturesComponent },
  { path: 'pokemon/pokeathlon-stats', component: PokeathlonStatsComponent },
  { path: 'pokemon/pokemon-location-areas', component: PokemonLocationAreasComponent },
  { path: 'pokemon/pokemon-colors', component: PokemonColorsComponent },
  { path: 'pokemon/pokemon-forms', component: PokemonFormsComponent },
  { path: 'pokemon/pokemon-habitats', component: PokemonHabitatsComponent },
  { path: 'pokemon/pokemon-shapes', component: PokemonShapesComponent },
  { path: 'pokemon/pokemon-species', component: PokemonSpeciesComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'types', component: TypesComponent }
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
