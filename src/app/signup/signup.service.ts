import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable, Subject } from "rxjs/Rx";
declare var firebase;

@Injectable()
export class SignupService {
    private database = firebase.database();

    constructor(private http: Http) { }      

    addUserInfo(email: string, firstName: string, lastName: string): Observable<any> {
        var subject = new Subject<string>()
        var uid = firebase.auth().currentUser.uid
        var user = { 'email': email, 'firstName': firstName, 'lastName': lastName, 'avatar': '0', 'cursor': '0', 'cursorFollower': '0', 'coins': '0' }
        var g = firebase.database().ref('users/student' + uid).set(user).then(x => subject.next(x));
        return subject.asObservable();
    }
    createUser(email: string, password: string): Observable<string> {
        const subject = new Subject<string>();
        firebase.auth().createUserWithEmailAndPassword(email, password).then(x => subject.next('userCreated')).catch(error => subject.next(error.code));
        return subject.asObservable();
    }

    sendVerificationEmail(): Observable<string> {
        const subject = new Subject<string>();
        var user = firebase.auth().currentUser;
        user.sendEmailVerification().then(x => subject.next('userCreated')).catch(error => subject.next(error.code));
        return subject.asObservable();
    }
}
