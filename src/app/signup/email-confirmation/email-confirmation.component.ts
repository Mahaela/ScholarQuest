import { Component,} from '@angular/core';
import { SignupService } from '../signup.service.ts';
import { Router } from '@angular/router';

@Component({
  selector: 'sq-email-confirmation',
  template: `
    <div>
        <p>
          We have sent you an email with a Key to verify you're the owner of this email.
        </p>
        <button class="btn btn-primary" onClick="resend()">Resend</button>
    </div>
  `,
  styleUrls: ['./email-confirmation.component.css'],
})
export class EmailConfirmationComponent {

    constructor(private signupService: SignupService, private router: Router) {
        if (!this.signupService.getFirstName()) {
            this.router.navigate(['/signup/credentials']);
        }
    }

  resend() {
  }

}
