import { Component } from '@angular/core';
import {
    FormGroup,
    FormControl,
    FormBuilder,
    Validators
} from '@angular/forms';
import { Observable} from 'rxjs/Rx';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { StudentService } from '../../student/student.service';



@Component({
    selector: 'sq-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
})
export class LoginComponent {
    loginForm: FormGroup;
    incUsernameOrPwd: boolean = false;

    constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private studentService: StudentService) {
        this.loginForm = formBuilder.group({
            email: ['', Validators.required],
            pwd: ['', Validators.required]
        });
    }

    onSubmit() {
      this.authService.login(this.loginForm.controls['email'].value, this.loginForm.controls['pwd'].value)
        .subscribe(
          data => {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            this.studentService.setStudentInfo(data);
            this.router.navigate(['profile']);
          },
          error => console.error(error)
        )
      // this.loginService.login(this.loginForm.controls['email'].value, this.loginForm.controls['pwd'].value).subscribe(msg => {
        //     switch (msg) {
        //         case 'loggedIn':
        //             this.studentService.setUserInfo().subscribe(msg => {
        //                 this.router.navigate(['profile']);
        //             });
        //             break;
        //         case "emailVerify":
        //             this.loginService.sendEmail();
        //             this.router.navigate(['signup/emailconf'])
        //             break;
        //         default:
        //             this.incUsernameOrPwd = true;
        //             break;
        //      }
        //   });
     }
}
