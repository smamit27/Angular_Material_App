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
  success(mes) {
    this.config['panelClass'] = ['notification','success'];
    this.snackBar.open(mes,'',this.config);
  }
}
