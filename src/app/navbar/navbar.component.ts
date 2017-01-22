import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { StudentService } from '../student/student.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'sq-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    private _loggedIn = false
    constructor(private studentService: StudentService, private router: Router, private authService: AuthService) {
        this.authService.isAuthenticated().subscribe( loggedin => {
            this._loggedIn = loggedin;
        });
    }

    getLoggedIn(): boolean {
        return this._loggedIn;
    }

    logout() {
      this.studentService.logout();
      this.router.navigate(['']);
  }
}
