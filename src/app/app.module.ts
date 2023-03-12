import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { ServicesModule } from './services/services.module';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { ModelsModule } from './models/models.module';
import { RoutingModule } from './routing/routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    SharedModule,
    ServicesModule,
    PagesModule,
    ModelsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
