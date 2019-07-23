import { Component } from '@angular/core';
import { SidebarService } from './nav/nav-bar.service';

@Component({
  selector: 'profile-app',
  templateUrl:'./profile-app.component.html',

  styleUrls: ['./profile-app.component.scss']
  // [`
 
  // .column-1{    float: left; width: 15%;  flex: 40%; }
  // .cloumn-2 {   float: left;    flex: 60%; } 
  // .row:after {    content: "";     display: flex;     clear: both;  }
  // `]
  
})
export class ProfileAppComponent {
  title = 'myProfile';
  constructor(public sidebarService: SidebarService){}
  toggleSidebar(){
    
    this.sidebarService.setSidebarState(!this.sidebarService.getsidebarState())
    console.log("sidebar state: "+this.sidebarService.getsidebarState());
  }
  getSideBarState(){
    return this.sidebarService.getsidebarState();
  }
  hideSidebar(){
    this.sidebarService.setSidebarState(true);
  }
}
