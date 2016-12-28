import { Injectable } from '@angular/core';
import { Http, Response} from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";


@Injectable()
export class LoginService {

    constructor(private http: Http) { }
    getData() {
        return this.http.get('https://scholar-quest.firebaseio.com/AccountsUnverified.json').map((response: Response) => response.json());
    }
}
