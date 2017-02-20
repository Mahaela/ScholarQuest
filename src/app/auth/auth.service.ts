import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs/Rx';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { StudentService } from '../student/student.service';



@Injectable()
export class AuthService {
    private _loggedIn = new Subject<boolean>();
    constructor(private studentService: StudentService, private http: Http) {
      this._loggedIn.next(localStorage.getItem('token') !== null)
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
    isEmailVerified(){
      return true;
    }
    isAuthenticated(){
      return true;
    }

  login(email: string, password: string): Observable<any> {
    this._loggedIn.next(true);
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
    this.studentService.logout();
    this._loggedIn.next(false);
  }

  isLoggedIn(){
      return this._loggedIn.asObservable();
  }

  getUserInfo(){
    return this.http.post('http://localhost:3000/student/getStudent', {'uid': localStorage.getItem('userId')})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }
}
