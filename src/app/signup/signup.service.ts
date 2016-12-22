import { Injectable } from '@angular/core';

@Injectable()
export class SignupService {
    private role: string;
    private firstName: string;
    private lastName: string;
    private pwd: string;
    private email: string;

    constructor() { }

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
       return {role: this.role, first: this.firstName, last: this.lastName, pwd: this.pwd, email: this.email };
    }
}
