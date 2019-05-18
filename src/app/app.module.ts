import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ProfileAppComponent } from './profile-app.component';

@NgModule({
  declarations: [
    ProfileAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ProfileAppComponent]
})
export class AppModule { }
