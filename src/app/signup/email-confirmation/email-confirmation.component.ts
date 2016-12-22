import { Component,} from '@angular/core';
import { SignupService } from '../signup.service';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from "@angular/http";
import "rxjs/Rx";

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
    private recipient: 'Mahaelajohnson@gmail.com';
    private subject: 'hello';
    private message: 'is it me you are looking for';
    private mailgunUrl: string = "MAILGUN_URL_HERE";
    private apiKey: string = "BASE64_API_KEY_HERE";

    constructor(private signupService: SignupService, private router: Router) {
        if (!this.signupService.getFirstName()) {
            this.router.navigate(['/signup/credentials']);
        }

        var google = require('googleapis');
        var plus = google.plus('v1');

        var API_KEY = 'AIzaSyB-PU402y14VdfJiNhODwWZUvGXTjLWj_M'; 

        plus.people.get({
            auth: API_KEY,
            userId: '+google'
        }, function (err, user) {
            console.log('Result: ' + (err ? err.message : user.displayName));
        });

    }


    public send() {
        if (this.recipient && this.subject && this.message) {
            let headers = new Headers(
                {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": "Basic " + this.apiKey
                }
            );
            let options = new RequestOptions({ headers: headers });
            let body = "from=test@example.com&to=" + this.recipient + "&subject=" + this.subject + "&text=" + this.message;
            this.http.post("https://api.mailgun.net/v3/" + this.mailgunUrl + "/messages", body, options)
                .map(result => result.json())
                .do(result => console.log("RESULT: ", JSON.stringify(result)))
                .subscribe(result => {
                    console.log("SENT!");
                    this.recipient = "";
                    this.subject = "";
                    this.message = "";
                }, error => {
                    console.log(error);
                });
        }
    }

  resend() {
  }

}
