import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardPlayerComponent } from './component/card-player/card-player.component';
import { SettingsComponent } from './pages/settings/settings.component';


const routes: Routes = [
 {path: '', component: CardPlayerComponent},
 {path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
