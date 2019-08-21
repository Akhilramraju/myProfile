import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ProfileAppComponent } from './profile-app.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { HeaderBarComponent } from './header/header-bar.component';
import {ParallaxDirective } from './common/parallax.directive'
import { introductionPage } from './introduction/introduction.component';


@NgModule({
  declarations: [
    ProfileAppComponent,
    NavBarComponent,
    HeaderBarComponent,
    ParallaxDirective,
    introductionPage
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [ProfileAppComponent]
})
export class AppModule { }

