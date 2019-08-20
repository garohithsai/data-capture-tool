import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class RouterService {
    routingObject;
    routingConstants = [];
    constructor(private router: Router) {
        this.routingObject = this.router.config;
        this.routingObject.forEach(route => {
            this.routingConstants.push(route.path);
        });
    }



    goToNextPage() {
        const currentPage = this.router.url.replace('/', '');
        const routeIndex = this.routingConstants.indexOf(currentPage);
        if (routeIndex !== this.routingConstants.length) {
            this.router.navigate([this.routingConstants[routeIndex + 1]]);
        }
    }

    goToPreviousPage() {
        const currentPage = this.router.url.replace('/', '');
        const routeIndex = this.routingConstants.indexOf(currentPage);
        if (routeIndex !== 0) {
            this.router.navigate([this.routingConstants[routeIndex - 1]]);
        }
    }
}
