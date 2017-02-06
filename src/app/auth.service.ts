import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

import { StudentService } from './student/student.service';

declare var firebase;

@Injectable()
export class AuthService {
    private _isLoggedIn = false;
    private _isEmailVerified = false;

    constructor(private studentService: StudentService) { }

    isAuthenticated(): Observable<boolean> {
 
        var subject = new Subject<boolean>();
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                if (!this.studentService.getLoaded()) {
                    this.studentService.setUserInfo().subscribe(() => {
                        subject.next(true);
                        user.emailVerified ? this._isEmailVerified = true : this._isEmailVerified = false;
                        this._isLoggedIn = true;
                    });
                }
                else {
                    subject.next(true);
                    this._isLoggedIn = false;
                }
            }
            else {
                subject.next(false);
                this._isLoggedIn = false;
            }
        });
        return subject.asObservable();
    }

    isEmailVerified(): boolean {
        return this._isEmailVerified;
    }

    isLoggedIn(): boolean {
        return this._isLoggedIn
    }

    logout() {
        this._isEmailVerified = false;
        this._isLoggedIn = false;
    }

    signedUp() {
        this._isLoggedIn = true;
    }
}
