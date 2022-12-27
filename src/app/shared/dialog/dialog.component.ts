import {Component} from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { DataStorageService } from '../../shared/data-storage.service';

/**
 * @title Dialog Animations
 */
@Component({
  selector: 'dialog-animations',
  templateUrl: 'dialog.component.html',
})
export class DialogAnimations {

  constructor(public dialogRef: MatDialogRef<DialogAnimations>, private dataStorageService: DataStorageService) {}

  onSaveData(){
    this.dataStorageService.storeRecipies();
  }

  onFetchData(){
    this.dataStorageService.fetchRecipes().subscribe();
  }
}