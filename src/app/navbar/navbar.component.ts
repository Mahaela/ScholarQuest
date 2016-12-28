import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { StudentService } from '../student/student.service';

@Component({
  selector: 'sq-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private studentService: StudentService, private router: Router) { }

  loggedIn(): boolean {
      if (this.studentService.getName() == '') {
          return false;
      }
      return true;
  }

  logout() {
      this.studentService.logout();
      this.router.navigate(['']);
  }
}
