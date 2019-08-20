import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { Controller } from '../rest-services-config/controller-mapping';
import { Constants } from '../constants/constants';
import { ControllerServiceMappping } from '../rest-services-config/controller-services-mapping';

@Injectable()
export class CommonService {

    constructor(private restService: RestService) {
    }

    retrieveForm(body) {
        return this.restService.post(Controller.FORM_CONTROLLER,
             ControllerServiceMappping[Controller.FORM_CONTROLLER][Constants.RETRIEVE_FORM], body);
    }
}
