import { Component } from '@angular/core';

@Component({
  selector: 'profile-app',
  templateUrl:'./profile-app.component.html',

  styles: [`
 
  .column-1{    float: left; width: 15%;  flex: 40%; }
  .cloumn-2 {   float: left;    flex: 60%; } 
  .row:after {    content: "";     display: flex;     clear: both;  }
  `]
  
})
export class ProfileAppComponent {
  title = 'myProfile';

}
