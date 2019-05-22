import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ProfileAppComponent } from './profile-app.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { HeaderBarComponent } from './header/header-bar.component';


@NgModule({
  declarations: [
    ProfileAppComponent,
    NavBarComponent,
    HeaderBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ProfileAppComponent]
})
export class AppModule { }

