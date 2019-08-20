import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class RestService {
    headers = new HttpHeaders({'Content-Type': 'application/json'});

    constructor(private http: HttpClient) {

    }
    post(controllerPath, serviceName, body) {
        const serviceUrl = this.getServiceUrl(controllerPath, serviceName);
        return this.http.post(serviceUrl, body, { headers: this.headers });
    }


    getServiceUrl(controllerPath, serviceName) {
        return this.getDomainUrl() + controllerPath + serviceName;
    }

    getDomainUrl() {
        return environment[window.location.origin].domainUrl;
    }
}
