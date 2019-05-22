import { Component } from '@angular/core';

@Component({
  selector: 'profile-app',
  template:`
  <div class="header"> <header-bar></header-bar>  </div>
  <div class="row">
  <div class="column-1"><nav-bar></nav-bar></div>
  <div class="column-2"><h1>Hello world!</h1></div>
  </div>
  `,

  styles: [`
  .column-1{    float: left; width: 15%;  flex: 40%; }
  .cloumn-2 {   float: left;    flex: 60%; } 
  .row:after {    content: "";     display: flex;     clear: both;  }
  `]
  
})
export class ProfileAppComponent {
  title = 'myProfile';
}
