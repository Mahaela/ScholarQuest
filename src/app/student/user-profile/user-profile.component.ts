
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'sq-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

    constructor(private router: Router, private studentService: StudentService) {
        //leave page if not logged in
        if (this.studentService.getName() == '') {
            this.router.navigate(['']);
        }
    }

  ngOnInit() {
  }

}
