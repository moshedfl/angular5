import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SuperInputComponent } from './cumps/super-input/super-input.component';
import { SuperInput2Component } from './cumps/super-input2/super-input2.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperInputComponent,
    SuperInput2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
