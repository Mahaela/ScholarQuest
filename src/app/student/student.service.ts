import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Response, Headers } from '@angular/http';

declare var firebase;


@Injectable()
export class StudentService {
    private name = '';
    private avatar = 0;
    private studentID= 0;
    private coins = new BehaviorSubject<number>(0);
    public coinsObs = this.coins.asObservable();
    private cursorFollowerStartXPos = 0;
    private cursorFollowerStartYPos = 0;
    private cursorFollower = 0;
    private cursor =0;
    private cursorFollowerStartPosition = new BehaviorSubject<number[]>([0, 0, 0]);
    public cursorFollowerStartPositionObs = this.cursorFollowerStartPosition.asObservable();
    private cursorStartPosition = new BehaviorSubject<number[]>([0, 0, 0]);
    public cursorStartPositionObs = this.cursorStartPosition.asObservable();
    private loaded = false;

    constructor(private http: Http) {
    }

    setName(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    setCoins(coins: number) {
        this.coins.next(this.coins.value + coins)
      return this.http.patch('http://localhost:3000/student/'+ this.studentID, {'coins': coins, 'id': this.studentID})
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw(error.json()));
       // firebase.database().ref('/users/student' + firebase.auth().currentUser.uid + '/coins').set(this.coins.value);
    }


    setAvatar(avatar: number) {
      return this.http.patch('http://localhost:3000/student/' + this.studentID, {'avatar': avatar, 'id': this.studentID})
        .map((response: Response) => {
        console.log(response);
          response.json()
        }).catch((error: Response) => Observable.throw(error.json()));
    }

    getAvatar(): number {
        return this.avatar;
    }

    getCursor(): number {
        return this.cursorStartPosition.value[0];
    }

    setCursorFollower(index: number, xPos: number, yPos: number) {
      this.cursorFollowerStartPosition.next([index, xPos, yPos]);
      this.cursorFollowerStartXPos = xPos;
      this.cursorFollowerStartYPos = yPos;
      return this.http.patch('http://localhost:3000/student/' + this.studentID, {'cursorFollower': index, 'id': this.studentID})
        .map((response: Response) => {
          console.log(response);
          response.json()
        }).catch((error: Response) => Observable.throw(error.json()));
        //firebase.database().ref('/users/student' + firebase.auth().currentUser.uid + '/cursorFollower').set(index);
    }

    getCursorFollower(): number {
        return this.cursorFollowerStartPosition.value[0];
    }

    setCursor(index: number, xPos: number, yPos: number) {
      this.cursorStartPosition.next([index, xPos, yPos]);
      return this.http.patch('http://localhost:3000/student/' + this.studentID, {'cursor': index, 'id': this.studentID})
        .map((response: Response) => {
          console.log(response);
          response.json()
        }).catch((error: Response) => Observable.throw(error.json()));
        //firebase.database().ref('/users/student' + firebase.auth().currentUser.uid + '/cursor').set(index);
    }

    setStudentInfo(student: any) {
      this.avatar = student.avatar;
      this.coins = student.coins;
      this.cursorFollower = student.cursorFollower;
      this.cursor = student.cursor;
      this.studentID = student.userId;
    }

    getLoaded():boolean {
        return this.loaded;
    }

    logout() {
        firebase.auth().signOut()
        this.name = '';
        this.coins.next(0);
        this.avatar = 0;
        this.cursorStartPosition.next([0, 0, 0]);
        this.cursorFollowerStartPosition.next([0, 0, 0]);
    }
}
