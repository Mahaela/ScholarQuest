﻿import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { AuthService } from './auth/auth.service';

@Injectable()
export class EmailGuard implements CanActivate {
    constructor(private authService: AuthService) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>| boolean {
        return this.authService.isEmailVerified();
    }
}
