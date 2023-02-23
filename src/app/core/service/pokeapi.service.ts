import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Pokemon } from '../model/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  private baseUrl: string = "https://pokeapi.co/api/v2";

  constructor(private http: HttpClient) { }

  public getPokemon(value: number | string): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.baseUrl + '/pokemon/' + value);
  }

}
