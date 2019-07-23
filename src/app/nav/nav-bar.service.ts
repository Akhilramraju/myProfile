import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})

export class SidebarService {
    toggled = false;
    _hasBackgroundImage = true;
    menus = [
        {
            title: 'general',
            type: 'header'
        }
    ];
    constructor() {}
        toggle(){
            this.toggled = ! this.toggled;
            }
            getsidebarState(){
                return this.toggled;
            }

            setSidebarState(state: boolean){
                this.toggled= state;
            }
            getMenuList() {
                return this.menus;
              }
            
              get hasBackgroundImage() {
                return this._hasBackgroundImage;
              }
            
              set hasBackgroundImage(hasBackgroundImage) {
                this._hasBackgroundImage = hasBackgroundImage;
              }

}