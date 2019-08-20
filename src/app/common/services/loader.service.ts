import { Injectable} from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LoaderService {
    isHttpServiceLoading = new Subject<boolean>();

    showLoader() {
        this.isHttpServiceLoading.next(true);
    }

    hideLoader() {
        this.isHttpServiceLoading.next(false);
    }
}
