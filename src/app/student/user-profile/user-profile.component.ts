import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../auth.service';

@Component({
    selector: 'sq-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
    
    constructor(private authService: AuthService, private router: Router) {
        if (!authService.isLoggedIn()) {
            router.navigate(['signup/credentials']);
        }
        else if (!authService.isEmailVerified()) {
            router.navigate(['signup/emailconf']);
        }
    }
}
