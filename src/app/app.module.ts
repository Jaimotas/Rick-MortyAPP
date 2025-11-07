import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonajesListComponent } from './components/personajes-list/personajes-list.component';
import { PersonajeDetailComponent } from './components/personaje-detail/personaje-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonajesListComponent,
    PersonajeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
