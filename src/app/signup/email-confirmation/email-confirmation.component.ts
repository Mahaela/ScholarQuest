import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from "@angular/http";
import "rxjs/Rx";

import { SignupService } from '../signup.service';
@Component({
  selector: 'sq-email-confirmation',
  template: `
    <div>
        <p>
          Play some games!
        </p>
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


    public send() {
        //var http = require('http');
        //var nodemailer = require('nodemailer');
        //http.createServer(function (req, res) {
        //    res.writeHead(200, { 'Content-Type': 'text/plain' });
        //    // Sending email
        //    var fromEmail = 'schquest@gmail.com';
        //    var fromPassword = 'Pewpew12!!';
        //    var toEmail = 'schquest@gmail.com';
        //    // Sending mail to the user
        //    //var transporter = nodemailer.createTransport({
        //    //    service: 'Gmail',
        //    //    auth: {
        //    //        user: fromEmail,
        //    //        pass: fromPassword
        //    //    }
        //    });
        ////    transporter.sendMail({
        ////        from: fromEmail,
        ////        to: toEmail,
        ////        subject: 'Testing Email',
        ////        text: 'This is sample text for the email',
        ////        html: '<p>This is a <b>sample</b> html</p><p>For the email</p>'
        ////    }, function (error, response) {
        ////        if (error) {
        ////            console.log('Failed in sending mail');
        ////            console.dir({ success: false, existing: false, sendError: true });
        ////            console.dir(error);
        ////            res.end('Failed in sending mail');
        ////        } else {
        ////            console.log('Successful in sedning email');
        ////            console.dir({ success: true, existing: false, sendError: false });
        ////            console.dir(response);
        ////            res.end('Successful in sedning email');
        ////        }
        ////    });
        ////})
    }

  resend() {
  }

}
