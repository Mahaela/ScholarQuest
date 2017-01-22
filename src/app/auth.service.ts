import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs/Rx';

declare var firebase

@Injectable()
export class AuthService {

    constructor() { }

    isAuthenticated(): Observable<boolean> {
        var subject = new Subject<boolean>();
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                subject.next(true);
            }
            else {
                subject.next(false);
            }
        });
        return subject.asObservable();
    }

}
