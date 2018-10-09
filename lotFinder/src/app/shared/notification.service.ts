import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig } from '@angular/material';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor( private snackBar : MatSnackBar) { }
  config : MatSnackBarConfig = {
    duration : 3000,
    horizontalPosition : 'right',
    verticalPosition : 'top'
  }
  success(message) {
    this.config['panelClass'] = ['notification','success'];
    this.snackBar.open(message,'',this.config);
  }
  delete(message) {
    this.config['panelClass'] = ['notification','warn'];
    this.snackBar.open(message,'',this.config);

  }
}
