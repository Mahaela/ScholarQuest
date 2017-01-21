import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import { Observable, Subject} from "rxjs/Rx";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
declare var firebase;

@Injectable()
export class StudentService {
    private name = '';
    private coins = 0;
    private avatar = 0;
    private cursor = 0;
    private cursorFollower = 0;
    private cursorFollowerStartXPos = 0;
    private cursorFollowerStartYPos = 0;
    private cursorFollowerStartPosition = new Subject<number[]>();
    public cursorFollowerStartPositionObs = this.cursorFollowerStartPosition.asObservable();
    public cursorStartPosition = new Subject<number[]>();
    public cursorStartPositionObs = this.cursorStartPosition.asObservable();

    constructor(private http: Http) {
    }

    setName(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    setCoins(coins: string) {
        this.coins = Number(coins);
    }

    getCoins(): number {
        return this.coins;
    }

    setAvatar(avatar: string | number) {
    }

    getAvatar(): number {
        return this.avatar;
    }

    getCursor(): number {
        return this.cursor;
    }

    setCursorFollower(index: number, xPos: number, yPos: number) {
        this.cursorFollowerStartPosition.next([index, xPos, yPos]);
        this.cursorFollower = index;
        this.cursorFollowerStartXPos = xPos;
        this.cursorFollowerStartYPos = yPos;
    }

    getCursorFollower(): number {
        return this.cursorFollower;
    }

    setCursor(index: number, xPos: number, yPos: number) {
        this.cursor = index;
        this.cursorStartPosition.next([index, xPos, yPos]);
    }

    setUserInfo(): Observable<boolean> {
        var subject = new Subject<boolean>();
        this.getUserInfo().subscribe(userInfo => {
            this.name = userInfo.firstName;
            this.avatar = userInfo.avatar;
            this.coins = userInfo.coins;
            this.cursor = userInfo.cursor;
            this.cursorFollower = userInfo.cursorFollower;
            subject.next(true);
        });
            return subject.asObservable();
    }

    getUserInfo(): Observable<any> {
        var subject = new Subject<any>();
        var userId = firebase.auth().currentUser.uid;
        firebase.database().ref('/users/' + userId).once('value').then(function (snapshot) {
            subject.next(snapshot.val());
        });
        return subject.asObservable();
    }

    logout() {
        firebase.auth().signOut()
        var signoutValue = 0
        this.name = '';
        this.coins = signoutValue;
        this.avatar = signoutValue;
        this.cursorStartPosition.next([0, 0, 0]);
        this.cursor = 0;
        this.cursorFollowerStartPosition.next([0, 0, 0]);
        this.cursorFollower = 0;
    }
}
