import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { ServicesModule } from '../services/services.module';
import { ModelsModule } from '../models/models.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PokemonCardComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    ModelsModule,
    ServicesModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    PokemonCardComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
