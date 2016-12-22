import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { HttpSignupService } from './http-signup.service'

@Component({
  selector: 'sq-http-signup',
  templateUrl: './http-signup.component.html',
  styleUrls: ['./http-signup.component.css']
})
export class HttpSignupComponent implements OnInit {


    constructor(private httpService: HttpSignupService) { }

    ngOnInit() {
        this.httpService.getAccountVerificationData().subscribe(
            (data: Response) => console.log(data)
        );
    }

}
