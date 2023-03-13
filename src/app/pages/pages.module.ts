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
import { BerryFirmnessesComponent } from './berries/berry-firmnesses/berry-firmnesses.component';
import { BerryFlavorsComponent } from './berries/berry-flavors/berry-flavors.component';
import { ContestTypesComponent } from './contests/contest-types/contest-types.component';
import { ContestEffectsComponent } from './contests/contest-effects/contest-effects.component';
import { SuperContestEffectsComponent } from './contests/super-contest-effects/super-contest-effects.component';
import { EncounterMethodsComponent } from './encounters/encounter-methods/encounter-methods.component';
import { EncounterConditionsComponent } from './encounters/encounter-conditions/encounter-conditions.component';
import { EncounterConditionValuesComponent } from './encounters/encounter-condition-values/encounter-condition-values.component';
import { EvolutionChainsComponent } from './evolution/evolution-chains/evolution-chains.component';
import { EvolutionTriggersComponent } from './evolution/evolution-triggers/evolution-triggers.component';
import { GenerationsComponent } from './games/generations/generations.component';
import { PokedexesComponent } from './games/pokedexes/pokedexes.component';
import { VersionComponent } from './games/version/version.component';
import { VersionGroupsComponent } from './games/version-groups/version-groups.component';
import { ItemAttributesComponent } from './items/item-attributes/item-attributes.component';
import { ItemCategoriesComponent } from './items/item-categories/item-categories.component';
import { ItemFlingEffectsComponent } from './items/item-fling-effects/item-fling-effects.component';
import { ItemPocketsComponent } from './items/item-pockets/item-pockets.component';
import { LocationAreasComponent } from './locations/location-areas/location-areas.component';
import { PalParkAreasComponent } from './locations/pal-park-areas/pal-park-areas.component';
import { RegionsComponent } from './locations/regions/regions.component';
import { MoveAilmentsComponent } from './moves/move-ailments/move-ailments.component';
import { MoveBattleStylesComponent } from './moves/move-battle-styles/move-battle-styles.component';
import { MoveCategoriesComponent } from './moves/move-categories/move-categories.component';
import { MoveDamageClassesComponent } from './moves/move-damage-classes/move-damage-classes.component';
import { MoveLearnMethodsComponent } from './moves/move-learn-methods/move-learn-methods.component';
import { MoveTargetsComponent } from './moves/move-targets/move-targets.component';
import { AbilitiesComponent } from './pokemon/abilities/abilities.component';
import { CharacteristicsComponent } from './pokemon/characteristics/characteristics.component';
import { EggGroupsComponent } from './pokemon/egg-groups/egg-groups.component';
import { GendersComponent } from './pokemon/genders/genders.component';
import { GrowthRatesComponent } from './pokemon/growth-rates/growth-rates.component';
import { NaturesComponent } from './pokemon/natures/natures.component';
import { PokeathlonStatsComponent } from './pokemon/pokeathlon-stats/pokeathlon-stats.component';
import { PokemonLocationAreasComponent } from './pokemon/pokemon-location-areas/pokemon-location-areas.component';
import { PokemonColorsComponent } from './pokemon/pokemon-colors/pokemon-colors.component';
import { PokemonFormsComponent } from './pokemon/pokemon-forms/pokemon-forms.component';
import { PokemonHabitatsComponent } from './pokemon/pokemon-habitats/pokemon-habitats.component';
import { PokemonShapesComponent } from './pokemon/pokemon-shapes/pokemon-shapes.component';
import { PokemonSpeciesComponent } from './pokemon/pokemon-species/pokemon-species.component';
import { StatsComponent } from './pokemon/stats/stats.component';
import { TypesComponent } from './pokemon/types/types.component';
import { ComponentsModule } from '../components/components.module';

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
    HomeComponent,
    BerryFirmnessesComponent,
    BerryFlavorsComponent,
    ContestTypesComponent,
    ContestEffectsComponent,
    SuperContestEffectsComponent,
    EncounterMethodsComponent,
    EncounterConditionsComponent,
    EncounterConditionValuesComponent,
    EvolutionChainsComponent,
    EvolutionTriggersComponent,
    GenerationsComponent,
    PokedexesComponent,
    VersionComponent,
    VersionGroupsComponent,
    ItemAttributesComponent,
    ItemCategoriesComponent,
    ItemFlingEffectsComponent,
    ItemPocketsComponent,
    LocationAreasComponent,
    PalParkAreasComponent,
    RegionsComponent,
    MoveAilmentsComponent,
    MoveBattleStylesComponent,
    MoveCategoriesComponent,
    MoveDamageClassesComponent,
    MoveLearnMethodsComponent,
    MoveTargetsComponent,
    AbilitiesComponent,
    CharacteristicsComponent,
    EggGroupsComponent,
    GendersComponent,
    GrowthRatesComponent,
    NaturesComponent,
    PokeathlonStatsComponent,
    PokemonLocationAreasComponent,
    PokemonColorsComponent,
    PokemonFormsComponent,
    PokemonHabitatsComponent,
    PokemonShapesComponent,
    PokemonSpeciesComponent,
    StatsComponent,
    TypesComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
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
    HomeComponent,
    BerryFirmnessesComponent,
    BerryFlavorsComponent,
    ContestTypesComponent,
    ContestEffectsComponent,
    SuperContestEffectsComponent,
    EncounterMethodsComponent,
    EncounterConditionsComponent,
    EncounterConditionValuesComponent,
    EvolutionChainsComponent,
    EvolutionTriggersComponent,
    GenerationsComponent,
    PokedexesComponent,
    VersionComponent,
    VersionGroupsComponent,
    ItemAttributesComponent,
    ItemCategoriesComponent,
    ItemFlingEffectsComponent,
    ItemPocketsComponent,
    LocationAreasComponent,
    PalParkAreasComponent,
    RegionsComponent,
    MoveAilmentsComponent,
    MoveBattleStylesComponent,
    MoveCategoriesComponent,
    MoveDamageClassesComponent,
    MoveLearnMethodsComponent,
    MoveTargetsComponent,
    AbilitiesComponent,
    CharacteristicsComponent,
    EggGroupsComponent,
    GendersComponent,
    GrowthRatesComponent,
    NaturesComponent,
    PokeathlonStatsComponent,
    PokemonLocationAreasComponent,
    PokemonColorsComponent,
    PokemonFormsComponent,
    PokemonHabitatsComponent,
    PokemonShapesComponent,
    PokemonSpeciesComponent,
    StatsComponent,
    TypesComponent
  ]
})
export class PagesModule { }
