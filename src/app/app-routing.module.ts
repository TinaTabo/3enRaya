import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardPlayerComponent } from './component/card-player/card-player.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { GameComponent } from './pages/game/game.component';


const routes: Routes = [
 {path: '', component: SettingsComponent},
 {path: 'game', component: GameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
