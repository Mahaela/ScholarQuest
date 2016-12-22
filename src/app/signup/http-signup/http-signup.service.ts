import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";


@Injectable()
export class HttpSignupService {

    constructor(private http: Http) { }

    getAccountVerificationData() {
        return this.http.get('https://scholarquest-2b92a.firebaseio.com/accountVerification').map((response: Response) => response.json());
    }

    sendUnverifiedData(user: any) {
        const body = JSON.stringify(user);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://scholar-quest.firebaseio.com/AccountsUnverified.json', body, { headers: headers })
            .map((data: Response)=>data.json());
    }
 }
  