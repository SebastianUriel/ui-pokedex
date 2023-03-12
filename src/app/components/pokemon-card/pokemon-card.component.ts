import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/model/pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {

  @Input() pokemon: Pokemon | undefined;
  pokemonImg: String | undefined;

  ngOnChanges() {
    console.log(this.pokemon);
    this.pokemonImg = this.pokemon?.sprites.other['official-artwork'].front_default;
  }

}
