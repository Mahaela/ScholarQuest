import { Component, OnInit } from '@angular/core';
import {
    FormGroup,
    FormControl,
    FormBuilder,
    Validators
} from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

import { LoginService } from './login.service';
import { StudentService } from '../student/student.service';



@Component({
    selector: 'sq-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [LoginService]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    data: Response;
    accounts: any[] = [];
    incUsernameOrPwd: boolean = false;

    constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router, private studentService: StudentService) {
        this.loginForm = formBuilder.group({
            email: ['', Validators.required],
            pwd: ['', Validators.required]
        });
    }

    ngOnInit(){
        this.loginService.getData().subscribe(
            data => {
                this.accounts = data;
            }
        );
    }

    onSubmit() {
        for (let i in this.accounts) {
            if (this.accounts[i]['email'] == this.loginForm.controls['email'].value
                && this.accounts[i]['pwd'] == this.loginForm.controls['pwd'].value) {
                this.studentService.setUserInfo(this.accounts[i], i);
                this.router.navigate(['/profile']);
            }
        }
        this.incUsernameOrPwd = true;
   }
}
