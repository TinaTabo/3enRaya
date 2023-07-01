import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardPlayerComponent } from './component/card-player/card-player.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { TableroComponent } from './component/tablero/tablero.component';
import { GameComponent } from './pages/game/game.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CardPlayerComponent,
    SettingsComponent,
    TableroComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
