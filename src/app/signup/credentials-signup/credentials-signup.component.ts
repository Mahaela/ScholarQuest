import { Component } from '@angular/core';
import {
    FormGroup,
    FormControl,
    Validators,
    FormBuilder,
    FormArray
} from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { SignupService } from '../signup.service.ts';


@Component({
    selector: 'sq-credentials-signup',
    templateUrl: './credentials-signup.component.html',
    styleUrls: ['./credentials-signup.component.css'],

})
export class CredentialsSignupComponent {
    signupForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private router: Router, private signupService: SignupService) {

        //return to the previous screen if there is no value for role
        if (!this.signupService.getRole()) {
            this.router.navigate(['/signup/']);
        }
        this.signupForm = formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]],
            passwords: formBuilder.group({
                pwd1: ['', Validators.required],
                pwd2: ['', Validators.required]
            }, { validator: this.pwdMatch })
        });
    }

    onSubmit() {
        this.signupService.setFirstName(this.signupForm.controls['firstName'].value);
        this.signupService.setLastName(this.signupForm.controls['lastName'].value);
        this.signupService.setPwd(this.signupForm.controls['pwd1'].value);
        this.router.navigate(['/signup/emailconf']);
    }

    errorMessage(control: FormControl): boolean {
        if (control.untouched || control.valid) {
            return false;
        }
        else {
            return true;
        }
    }

    pwdErrorMessage(group: FormGroup): boolean {
        if (group.controls['pwd1'].touched && group.controls['pwd2'].touched
            && !group.valid) {
            return true;
        }
        else return false;
    }

    pwdMatch(group: FormGroup): {[key: string]: boolean} {
        if (group.controls['pwd1'].value === group.controls['pwd2'].value) {
            return null;
        }
        else {
            return { example: true };
        }
    }
}

