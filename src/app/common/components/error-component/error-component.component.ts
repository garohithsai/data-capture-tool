import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, } from '@angular/material';

import { ErrorBroadcastService } from '../../services/error-broadcast.service';

@Component({
  selector: 'app-error-component',
  templateUrl: './error-component.component.html',
  styleUrls: ['./error-component.component.scss']
})
export class ErrorComponentComponent implements OnInit {

  constructor(private errorBroadcastService: ErrorBroadcastService, public snackBar: MatSnackBar) { }
  showError = false;
  errorMessage = '';
  actionButtonLabel = 'Retry';
  defaultErrorMessage = 'Cannot process the request';
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  ngOnInit() {
    this.initializeErrors();
  }

  initializeErrors() {
    this.errorBroadcastService.showError.asObservable().subscribe((value) => {
      this.showError = value;
    });
    this.errorBroadcastService.errorMessage.asObservable().subscribe((value: string) => {
      this.errorMessage = value;
      this.openErrorSnackbar();
    });
  }

  openErrorSnackbar() {
    const config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    if (this.showError) {
      this.snackBar.open(this.showError ? this.errorMessage : this.defaultErrorMessage,
        this.showError ? this.actionButtonLabel : undefined, config);
    }
  }
}
