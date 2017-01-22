import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from "@angular/http";

import { AuthService } from '../../auth.service'
import { SignupService } from '../signup.service';

declare var firebase;

@Component({
  selector: 'sq-email-confirmation',
  template: `
    <div>
        <p>
         We have sent an email to your email address. Please follow the instructions to verify your account.
        </p>
        <button class="btn btn-primary" (click)="resend()">Resend Email</button>
    </div>
  `,
  styleUrls: ['./email-confirmation.component.css'],
})
export class EmailConfirmationComponent {

    constructor(private signupService: SignupService, private router: Router, private authService: AuthService) {
        this.authService.isAuthenticated().subscribe(loggedIn => {
            if (!loggedIn) {
                this.router.navigate(['/signup/credentials']);
            }
            else {
                var user = firebase.auth().currentUser;
                if (user.emailVerified) {
                    this.router.navigate(['/profile']);
                }
            });
        }

    resend() {
        this.signupService.sendVerificationEmail();
  }

}
