import { Component, OnInit, HostBinding } from '@angular/core';
import { AuthService } from './auth/auth.service';

import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../custom-theme.scss']
})
export class AppComponent implements OnInit{
  @HostBinding('class') componentCssClass= 'dark-theme';


  constructor(private authService: AuthService, public overlayContainer: OverlayContainer) {}

  ngOnInit() {
    this.overlayContainer.getContainerElement().classList.add(this.componentCssClass);
    
    this.authService.autoLogin();
  }
  
  onSetTheme(e:string){
    this.overlayContainer.getContainerElement().classList.add(e);
    //console.log(this.overlayContainer.getContainerElement().classList[1]);
    this.componentCssClass = e;
    //console.log(this.componentCssClass);
  }

}
