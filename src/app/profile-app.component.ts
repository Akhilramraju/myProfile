import { Component } from '@angular/core';
import { SidebarService } from './nav/nav-bar.service';
// import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'profile-app',
  templateUrl: './profile-app.component.html',

  styleUrls: ['./profile-app.component.scss']
  // [`

  // .column-1{    float: left; width: 15%;  flex: 40%; }
  // .cloumn-2 {   float: left;    flex: 60%; } 
  // .row:after {    content: "";     display: flex;     clear: both;  }
  // `]

})
export class ProfileAppComponent {
  title = 'myProfile';
  public showNavigationNavigation: boolean = true;
  constructor(public sidebarService: SidebarService) { }
  toggleSidebar() {

    this.sidebarService.setSidebarState(!this.sidebarService.getsidebarState())
    console.log("sidebar state: " + this.sidebarService.getsidebarState());
    this.showNavigationNavigation = !this.showNavigationNavigation;

  }
  getSideBarState() {
    return this.sidebarService.getsidebarState();
  }
  hideSidebar() {
    this.sidebarService.setSidebarState(true);
  }
  // ngAfterContentInit() {
  //   const Elm = require('../elm/main');
  //   Elm.Main.embed(document.getElementById('elm'));
  // }
}
