import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThreejsMouseAnimationComponent } from 'src/assets/scripts/threejsmouseanimation';
import { ThreejsAutoAnimationComponent } from 'src/assets/scripts/threejsautoanimation';





@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ThreejsMouseAnimationComponent,
    ThreejsAutoAnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
