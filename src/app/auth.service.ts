import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs/Rx';

import { StudentService } from './student/student.service';

declare var firebase

@Injectable()
export class AuthService {

    constructor(private studentService: StudentService) { }

    isAuthenticated(): Observable<boolean> {
        var subject = new Subject<boolean>();
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                if (!this.studentService.getLoaded()) {
                    this.studentService.setUserInfo().subscribe(x => subject.next(true));
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
