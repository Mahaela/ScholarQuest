import { Component, OnInit } from '@angular/core';
import {
    FormGroup,
    FormControl,
    Validators,
    FormBuilder,
    FormArray
} from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { SignupService } from '../signup.service';

@Component({
    selector: 'sq-credentials-signup',
    templateUrl: './credentials-signup.component.html',
    styleUrls: ['./credentials-signup.component.css'],

})
export class CredentialsSignupComponent {
    private signupForm: FormGroup;
    private errorMsg = '0';
      
    constructor(private formBuilder: FormBuilder, private router: Router, private signupService: SignupService) {
               
        this.signupForm = formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]],
             passwords: formBuilder.group({
                 pwd1: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
                 pwd2: ['', Validators.required]
             }, { validator: this.pwdMatch }) 
        });
    }

    onSubmit() {
        this.signupService.createUser(this.signupForm.controls['email'].value, this.signupForm.get(['passwords', 'pwd1']).value).subscribe(msg => this.addUserDatatToDatabase(msg)); 
    }

    errorMessage(control: FormControl): boolean {
        if (control.untouched || control.valid) {
            return false;
        }
        else {
            return true;
        }
    }

    addUserDatatToDatabase(msg: string) {
        switch (msg) {
            case 'userCreated':
                this.signupService.addUserInfo(this.signupForm.controls['email'].value, this.signupForm.controls['firstName'].value, this.signupForm.controls['lastName'].value).subscribe(x => this.signupService.sendVerificationEmail().subscribe(x => this.router.navigate(['signup/emailconf'])));
                break;
            case 'auth/invalid-email':
                this.errorMsg = '1';
                break;
            case 'auth/email-already-in-use':
                this.errorMsg = '2';
                break;
            default:
                this.errorMsg = 'other';
        }
    }

     pwdErrorMessage(group: FormGroup): boolean {
        if (group.controls['pwd1'].touched && group.controls['pwd2'].touched
            && !group.valid) {
            return true;
        }
        else return false;
    }

    pwdMatch(group: FormGroup): { [key: string]: boolean } {
        if (group.controls['pwd1'].value === group.controls['pwd2'].value) {
            return null;
        }
        else {
            return { example: true };
        }
    }
}

