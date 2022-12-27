import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from 'src/matrial.module';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { DialogAnimations } from './shared/dialog/dialog.component'
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DialogAnimations
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    FontAwesomeModule,
    SharedModule,
    CoreModule
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { 
  constructor(library: FaIconLibrary){
    library.addIcons(faMoon, faSun);
    //library.addIconPacks(fas, far);
  };
}
