import { Component } from '@angular/core';
import { PokeapiService } from '../app/core/service/pokeapi.service';
import { Pokemon } from '../app/core/model/pokemon';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ui-pokedex-angular';

  constructor(private pokeapiService: PokeapiService) {}

  ngOnInit() {
    this.pokeapiService.getPokemon(1)
      .subscribe((data: Pokemon) => console.log(data));
  }

}
