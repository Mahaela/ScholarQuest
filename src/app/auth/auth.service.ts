import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { StudentService } from '../student/student.service';

declare var firebase

@Injectable()
export class AuthService {
    private loggedIn = new BehaviorSubject<boolean>(false);
    public loggedInObs = this.loggedIn.asObservable();

    constructor(private studentService: StudentService, private http: Http) { }

    isAuthenticated(): Observable<boolean> {

        var subject = new Subject<boolean>();
        // firebase.auth().onAuthStateChanged(user => {
        //     if (user) {
        //         if (!this.studentService.getLoaded()) {
        //             this.studentService.setUserInfo().subscribe(() => subject.next(true));
        //         }
        //         else {
        //             subject.next(true);
        //         }
        //     }
        //     else {
        //         subject.next(false);
        //     }
        //  });
      subject.next(false);
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

    signup(email: string, password: string, firstName: string, lastName: string): Observable<any> {
        var user = {
          'email': email,
          'password': password,
          'firstName': firstName,
          'lastName': lastName,
          'avatar': 0,
          'cursor': 0,
          'cursorFollower': 0,
          'coins': 0
        };
      return this.http.post('http://localhost:3000/student', user)
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw(error.json()));

    }

  login(email: string, password: string): Observable<any> {
    var user = {
      'email': email,
      'password': password,
    };
    return this.http.post('http://localhost:3000/student/signin', user)
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  logout() {
    localStorage.clear()
  }

  isLoggedIn(){
      return localStorage.getItem('token') !== null;
  }
}
