import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";

@Injectable()
export class SignupService {
    private role: string;
    private firstName: string;
    private lastName: string;
    private pwd: string;
    private email: string;

    constructor(private http: Http) { }

    setRole(role: string) {
        this.role = role;
    }

    getRole(): string {
        return this.role;
    }

    setFirstName(firstName: string) {
        this.firstName = firstName;
    }

    getFirstName(): string {
        return this.firstName;
    }

    setLastName(lastName: string) {
        this.lastName = lastName;
    }

    getLastName(): string {
        return this.lastName;
    }

    setPwd(pwd: string) {
        this.pwd = pwd;
    }

    getPwd(): string {
        return this.pwd;
    }

    setEmail(email: string) {
        this.email = email;
    }

    getEmail(): string {
        return this.email;
    }

    getUserInfo(): Object {
       return {role: this.role, first: this.firstName, last: this.lastName, pwd: this.pwd, email: this.email, coins: '0', avatar: '0', cursor: '0',  cursorFollower: '0' };
    }

    getData() {
        return this.http.get('https://scholar-quest.firebaseio.com/AccountsUnverified.json').map((response: Response) => response.json());
    }

    sendUnverifiedData() {
        const user = this.getUserInfo();
        const body = JSON.stringify(user);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://scholar-quest.firebaseio.com/AccountsUnverified.json', body, { headers: headers })
            .map((data: Response) => data.json());
    }
}
