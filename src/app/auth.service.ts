import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

import { StudentService } from './student/student.service';

declare var firebase

@Injectable()
export class AuthService {
    private loggedIn = new BehaviorSubject<boolean>(false);
    public loggedInObs = this.loggedIn.asObservable();

    constructor(private studentService: StudentService) { }

    isAuthenticated(): Observable<boolean> {
 
        var subject = new Subject<boolean>();
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                if (!this.studentService.getLoaded()) {
                    this.studentService.setUserInfo().subscribe(() => subject.next(true));
                }
                else {
                    subject.next(true);
                }
            }
            else {
                subject.next(false);
            }
        });
        return subject.asObservable();
    }

    isEmailVerified() {
        var subject = new Subject<boolean>();
        firebase.auth().onAuthStateChanged(user => {
            if (user && user.emailVerified) {
                subject.next(true);
            }
            else {
                subject.next(false);
            }
        });
        return subject.asObservable();
    }
}
