import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';
import { DialogAnimations } from '../shared/dialog/dialog.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls:['./header.component.css']
})

export class HeaderComponent implements OnInit, OnDestroy {
  @Output() onSetTheme = new EventEmitter();

  mode : string;
  private userSub: Subscription;
  isAuthenticated = false;

constructor(private dataStorageService: DataStorageService, private authService: AuthService, public dialog: MatDialog){}

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });
  }  

  onSaveData(){
    this.dataStorageService.storeRecipies();
  }

  onFetchData(){
    this.dataStorageService.fetchRecipes().subscribe();
  }

  onLogout() {
    this.authService.logout();
  }

  onCallParentSetTheme(){
    this.mode = this.mode === 'light-theme'? 'dark-theme' : 'light-theme';
    this.onSetTheme.emit(this.mode);
  }

  onManage(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.enterAnimationDuration = enterAnimationDuration;
    dialogConfig.exitAnimationDuration = exitAnimationDuration;
    
    this.dialog.open(DialogAnimations, dialogConfig);
  }
  
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
