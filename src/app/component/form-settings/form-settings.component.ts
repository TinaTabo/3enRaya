import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-settings',
  templateUrl: './form-settings.component.html',
  styleUrls: ['./form-settings.component.css']
})
export class FormSettingsComponent {

  constructor (public router: Router){

  }

  public cancelar():void {
    this.router.navigateByUrl('/');
  }

}
