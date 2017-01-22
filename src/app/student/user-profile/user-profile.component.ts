/// <reference path="../student.service.ts" />
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../auth.service';
import { StudentService } from '../student.service';

@Component({
    selector: 'sq-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
    
    constructor(private authService: AuthService, private studentService: StudentService, private router: Router) {
        authService.isAuthenticated().subscribe(loggedin => {
            if (!loggedin) {
                this.router.navigate(['']);
            }
            else {
                this.studentService.setUserInfo();
            }
        });       
    }
}
