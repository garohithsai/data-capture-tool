import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorBroadcastService {
  public showError: BehaviorSubject<boolean>;
  public errorMessage: BehaviorSubject<{}>;

  constructor() {
    this.showError = new BehaviorSubject<boolean>(false);
    this.errorMessage = new BehaviorSubject<object>({});
   }
}
