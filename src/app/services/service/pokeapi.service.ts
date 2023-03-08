import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/models/model/pokemon';
import { Berry } from 'src/app/models/model/berry';
import { BerryFirmness } from 'src/app/models/model/berryFirmness';
import { BerryFlavor } from 'src/app/models/model/berryFlavor';
import { ContestType } from 'src/app/models/model/contestType';
import { ContestEffect } from 'src/app/models/model/contestEffect';
import { SuperContestEffect } from 'src/app/models/model/superContestEffect';
import { EncounterMethod } from 'src/app/models/model/encounterMethod';
import { EncounterCondition } from 'src/app/models/model/encounterCondition';
import { EncounterConditionValue } from 'src/app/models/model/encounterConditionValue';
import { EvolutionChain } from 'src/app/models/model/evolutionChain';
import { EvolutionTrigger } from 'src/app/models/model/evolutionTrigger';
import { Generation } from 'src/app/models/model/generation';
import { Pokedex } from 'src/app/models/model/pokedex';
import { Version } from 'src/app/models/model/version';
import { VersionGroup } from 'src/app/models/model/versionGroup';
import { Item } from 'src/app/models/model/Item';
import { ItemAttribute } from 'src/app/models/model/itemAttribute';
import { ItemCategory } from 'src/app/models/model/itemCategory';
import { ItemFlingEffect } from 'src/app/models/model/itemFlingEffect';
import { ItemPocket } from 'src/app/models/model/itemPocket';
import { LocationArea } from 'src/app/models/model/locationArea';
import { PalParkArea } from 'src/app/models/model/palParkArea';
import { Region } from 'src/app/models/model/region';
import { Machine } from 'src/app/models/model/machine';
import { Move } from 'src/app/models/model/move';
import { MoveAilment } from 'src/app/models/model/moveAilment';
import { MoveBattleStyle } from 'src/app/models/model/moveBattleStyle';
import { MoveCategory } from 'src/app/models/model/moveCategory';
import { MoveDamageClass } from 'src/app/models/model/moveDamageClass';
import { MoveLearnMethod } from 'src/app/models/model/moveLearnMethod';
import { MoveTarget } from 'src/app/models/model/moveTarget';
import { Ability } from 'src/app/models/model/ability';
import { Characteristic } from 'src/app/models/model/characteristic';
import { EggGroup } from 'src/app/models/model/eggGroup';
import { Gender } from 'src/app/models/model/gender';
import { GrowthRate } from 'src/app/models/model/growthRate';
import { Nature } from 'src/app/models/model/nature';
import { PokeathlonStat } from 'src/app/models/model/pokeathlonStat';
import { PokemonLocationArea } from 'src/app/models/model/pokemonLocationAreas';
import { PokemonColor } from 'src/app/models/model/pokemonColor';
import { PokemonForm } from 'src/app/models/model/pokemonForm';
import { PokemonHabitat } from 'src/app/models/model/pokemonHabitat';
import { PokemonShape } from 'src/app/models/model/pokemonShape';
import { PokemonSpecy } from 'src/app/models/model/pokemonSpecy';
import { Stat } from 'src/app/models/model/Stat';
import { Type } from 'src/app/models/model/Type';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  private baseUrl: string = "https://pokeapi.co/api/v2";

  constructor(private http: HttpClient) { }

  public getBerry(value: number | string): Observable<Berry> {
    return this.http.get<Berry>(this.baseUrl + '/berry/' + value);
  }

  public getBerryFirmness(value: number | string): Observable<BerryFirmness> {
    return this.http.get<BerryFirmness>(this.baseUrl + '/berry-firmness/' + value);
  }

  public getBerryFlavor(value: number | string): Observable<BerryFlavor> {
    return this.http.get<BerryFlavor>(this.baseUrl + '/berry-flavor/' + value);
  }

  public getContestType(value: number | string): Observable<ContestType> {
    return this.http.get<ContestType>(this.baseUrl + '/contest-type/' + value);
  }

  public getContestEffect(value: number | string): Observable<ContestEffect> {
    return this.http.get<ContestEffect>(this.baseUrl + '/contest-effect/' + value);
  }

  public getSuperContestEffect(value: number | string): Observable<SuperContestEffect> {
    return this.http.get<SuperContestEffect>(this.baseUrl + '/super-contest-effect/' + value);
  }

  public getEncounterMethod(value: number | string): Observable<EncounterMethod> {
    return this.http.get<EncounterMethod>(this.baseUrl + '/encounter-method/' + value);
  }

  public getEncounterCondition(value: number | string): Observable<EncounterCondition> {
    return this.http.get<EncounterCondition>(this.baseUrl + '/encounter-condition/' + value);
  }

  public getEncounterConditionValue(value: number | string): Observable<EncounterConditionValue> {
    return this.http.get<EncounterConditionValue>(this.baseUrl + '/encounter-condition-value/' + value);
  }

  public getEvolutionChain(value: number | string): Observable<EvolutionChain> {
    return this.http.get<EvolutionChain>(this.baseUrl + '/evolution-chain/' + value);
  }

  public getEvolutionTrigger(value: number | string): Observable<EvolutionTrigger> {
    return this.http.get<EvolutionTrigger>(this.baseUrl + '/evolution-trigger/' + value);
  }

  public getGeneration(value: number | string): Observable<Generation> {
    return this.http.get<Generation>(this.baseUrl + '/generation/' + value);
  }

  public getPokedex(value: number | string): Observable<Pokedex> {
    return this.http.get<Pokedex>(this.baseUrl + '/pokedex/' + value);
  }

  public getVersion(value: number | string): Observable<Version> {
    return this.http.get<Version>(this.baseUrl + '/version/' + value);
  }

  public getVersionGroup(value: number | string): Observable<VersionGroup> {
    return this.http.get<VersionGroup>(this.baseUrl + '/version-group/' + value);
  }

  public getItem(value: number | string): Observable<Item> {
    return this.http.get<Item>(this.baseUrl + '/item/' + value);
  }

  public getItemAttribute(value: number | string): Observable<ItemAttribute> {
    return this.http.get<ItemAttribute>(this.baseUrl + '/item-attribute/' + value);
  }

  public getItemCategory(value: number | string): Observable<ItemCategory> {
    return this.http.get<ItemCategory>(this.baseUrl + '/item-category/' + value);
  }

  public getItemFlingEffect(value: number | string): Observable<ItemFlingEffect> {
    return this.http.get<ItemFlingEffect>(this.baseUrl + '/item-fling-effect/' + value);
  }

  public getItemPocket(value: number | string): Observable<ItemPocket> {
    return this.http.get<ItemPocket>(this.baseUrl + '/item-pocket/' + value);
  }

  public getLocation(value: number | string): Observable<Location> {
    return this.http.get<Location>(this.baseUrl + '/location/' + value);
  }

  public getLocationArea(value: number | string): Observable<LocationArea> {
    return this.http.get<LocationArea>(this.baseUrl + '/location-area/' + value);
  }

  public getPalParkArea(value: number | string): Observable<PalParkArea> {
    return this.http.get<PalParkArea>(this.baseUrl + '/pal-park-area/' + value);
  }

  public getRegion(value: number | string): Observable<Region> {
    return this.http.get<Region>(this.baseUrl + '/region/' + value);
  }

  public getMachine(value: number | string): Observable<Machine> {
    return this.http.get<Machine>(this.baseUrl + '/machine/' + value);
  }

  public getMove(value: number | string): Observable<Move> {
    return this.http.get<Move>(this.baseUrl + '/move/' + value);
  }

  public getMoveAilment(value: number | string): Observable<MoveAilment> {
    return this.http.get<MoveAilment>(this.baseUrl + '/move-ailment/' + value);
  }

  public getMoveBattleStyle(value: number | string): Observable<MoveBattleStyle> {
    return this.http.get<MoveBattleStyle>(this.baseUrl + '/move-battle-style/' + value);
  }

  public getMoveCategory(value: number | string): Observable<MoveCategory> {
    return this.http.get<MoveCategory>(this.baseUrl + '/move-category/' + value);
  }

  public getMoveDamageClass(value: number | string): Observable<MoveDamageClass> {
    return this.http.get<MoveDamageClass>(this.baseUrl + '/move-damage-class/' + value);
  }

  public getMoveLearnMethod(value: number | string): Observable<MoveLearnMethod> {
    return this.http.get<MoveLearnMethod>(this.baseUrl + '/move-learn-method/' + value);
  }

  public getMoveTarget(value: number | string): Observable<MoveTarget> {
    return this.http.get<MoveTarget>(this.baseUrl + '/move-target/' + value);
  }

  public getAbility(value: number | string): Observable<Ability> {
    return this.http.get<Ability>(this.baseUrl + '/ability/' + value);
  }

  public getCharacteristic(value: number): Observable<Characteristic> {
    return this.http.get<Characteristic>(this.baseUrl + '/characteristic/' + value);
  }

  public getEggGroup(value: number | string): Observable<EggGroup> {
    return this.http.get<EggGroup>(this.baseUrl + '/egg-group/' + value);
  }

  public getGender(value: number | string): Observable<Gender> {
    return this.http.get<Gender>(this.baseUrl + '/gender/' + value);
  }

  public getGrowthRate(value: number | string): Observable<GrowthRate> {
    return this.http.get<GrowthRate>(this.baseUrl + '/growth-rate/' + value);
  }

  public getNature(value: number | string): Observable<Nature> {
    return this.http.get<Nature>(this.baseUrl + '/nature/' + value);
  }

  public getPokeathlonStat(value: number | string): Observable<PokeathlonStat> {
    return this.http.get<PokeathlonStat>(this.baseUrl + '/pokeathlon-stat/' + value);
  }
  
  public getPokemon(value: number | string): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.baseUrl + '/pokemon/' + value);
  }

  public getPokemonLocationArea(value: number | string): Observable<PokemonLocationArea[]> {
    return this.http.get<PokemonLocationArea[]>(this.baseUrl + '/pokemon/' + value + '/encounters');
  }

  public getPokemonColor(value: number | string): Observable<PokemonColor> {
    return this.http.get<PokemonColor>(this.baseUrl + '/pokemon-color/' + value);
  }
  
  public getPokemonForm(value: number | string): Observable<PokemonForm> {
    return this.http.get<PokemonForm>(this.baseUrl + '/pokemon-form/' + value);
  }

  public getPokemonHabitat(value: number | string): Observable<PokemonHabitat> {
    return this.http.get<PokemonHabitat>(this.baseUrl + '/pokemon-habitat/' + value);
  }

  public getPokemonShape(value: number | string): Observable<PokemonShape> {
    return this.http.get<PokemonShape>(this.baseUrl + '/pokemon-shape/' + value);
  }

  public getPokemonSpecy(value: number | string): Observable<PokemonSpecy> {
    return this.http.get<PokemonSpecy>(this.baseUrl + '/pokemon-species/' + value);
  }

  public getStat(value: number | string): Observable<Stat> {
    return this.http.get<Stat>(this.baseUrl + '/stat/' + value);
  }

  public getType(value: number | string): Observable<Type> {
    return this.http.get<Type>(this.baseUrl + '/type/' + value);
  }

}
