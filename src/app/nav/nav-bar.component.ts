import { Component, OnInit } from '@angular/core'
import { SidebarService } from './nav-bar.service';

@Component({
    selector:'nav-bar',
    templateUrl:'./nav-bar.component.html',
    styles: ['./nav-bar.component.scss']
// [`
//         .nav-menu-list{ list-style-type: none;    width: 80px; }
//         .nav-menu-div {    margin: 0; padding: 0; border: 0; font-size: 100%; font: inherit; vertical-align: baseline;}
//         .nav.nav-bar-nav {font-size: 15px}
//         .nav-svg {  box-sizing: inherit;     align-items: center;
//             border-left: 2px solid #dbf3ff;
//             color: black;
//             display: flex;
//             flex-direction: column;
//             height: 100px;
//             justify-content: center;
//             text-align: center; }
//     #searchForm {margin-right: 100px;}
//     @media (max-width: 1200px) {#searchForm {display:none}}
//    li > a.active { color: #F97924; }`]
})

export class NavBarComponent implements OnInit{
    constructor(public sidebarservice: SidebarService){}
    ngOnInit(){

    }
    getSideBarState() {
        return this.sidebarservice.getsidebarState();
      }
    
}