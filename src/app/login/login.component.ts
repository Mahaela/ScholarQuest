import { Component } from '@angular/core';
import {
    FormGroup,
    FormControl,
    FormBuilder,
    Validators
} from '@angular/forms';
import { Observable} from 'rxjs/Rx';
import { Router } from '@angular/router';

import { LoginService } from './login.service';
import { StudentService } from '../student/student.service';



@Component({
    selector: 'sq-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [LoginService]
})
export class LoginComponent {
    loginForm: FormGroup;
    incUsernameOrPwd: boolean = false;

    constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router, private studentService: StudentService) {
        this.loginForm = formBuilder.group({
            email: ['', Validators.required],
            pwd: ['', Validators.required]
        });
    }

    onSubmit() {
        this.loginService.login(this.loginForm.controls['email'].value, this.loginForm.controls['pwd'].value).subscribe(msg => {
            console.log();
            switch (msg) {
                case 'loggedIn':
                    this.studentService.setUserInfo().subscribe(msg => {
                        this.router.navigate(['profile']);
                    });
                    break;
                case "emailVerify":
                    console.log("verifyied");
                    this.loginService.sendEmail();
                    this.router.navigate(['signup/emailconf'])
                    break;
                default:
                    this.incUsernameOrPwd = true;
                    break;
             }
          }); 
     }
}
