import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardPlayerComponent } from './component/card-player/card-player.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { FormSettingsComponent } from './component/form-settings/form-settings.component';
import { TableroComponent } from './component/tablero/tablero.component';

@NgModule({
  declarations: [
    AppComponent,
    CardPlayerComponent,
    SettingsComponent,
    FormSettingsComponent,
    TableroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
