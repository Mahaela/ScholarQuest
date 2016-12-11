import { Component } from '@angular/core';
import {
    FormGroup,
    FormControl,
    Validators,
    FormBuilder,
    FormArray
} from "@angular/forms";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'sq-credentials-signup',
  templateUrl: './credentials-signup.component.html',
  styleUrls: ['./credentials-signup.component.css']
})
export class CredentialsSignupComponent {
    myForm: FormGroup;
    pswdMatch: string;

    constructor(private formBuilder: FormBuilder) {

        this.myForm = formBuilder.group({
            'firstName': ['', Validators.required],
            'lastName': ['', Validators.required],
            'email': ['', [
                    Validators.required,
                    Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
             ]],
            'pwd1': ['', Validators.required],
            'pwd2': ['', [Validators.required]],
        });
        this.myForm.statusChanges.subscribe(
            (data: any) => console.log(data)
        );
    }

    onSubmit() {
        console.log(this.myForm);
    }

    errorMessage(control: FormControl):boolean {
        if (control.untouched || control.valid) {
            return false;
        }
        else {
            return true;
        }
    }

    pwdMatch(control: FormControl): { [s: string]: boolean } {
        if (this.myForm.controls['pwd2'].value !== this.myForm.controls['pwd1'].value) {
            return { example: true };
        }
        return null;
    }

    asyncExampleValidator(control: FormControl): Promise<any> | Observable<any> {
        const promise = new Promise<any>(
            (resolve, reject) => {
                setTimeout(() => {
                    if (control.value === 'Example') {
                        resolve({ 'invalid': true });
                    } else {
                        resolve(null);
                    }
                }, 1500);
            }
        );
        return promise;
    }

}

