import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';
import { ProfileAppComponent } from './profile-app.component';
import { ContactComponent } from './contact/contact.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { HeaderBarComponent } from './header/header-bar.component';
import { ParallaxDirective } from './common/parallax.directive'
import { getMatFormFieldPlaceholderConflictError } from '@angular/material';
import { introductionPage } from './introduction/introduction.component';
import { fromEventPattern } from 'rxjs';


@NgModule({
  declarations: [
    ProfileAppComponent,
    NavBarComponent,
    HeaderBarComponent,
    ParallaxDirective,
    introductionPage,
    ContactComponent

  ],

  imports: [

    BrowserModule,
    MatExpansionModule,
    BrowserAnimationsModule


  ],
  exports: [

    BrowserModule,
    MatExpansionModule,


  ]
  ,
  providers: [],
  bootstrap: [ProfileAppComponent]
})
export class AppModule { }

