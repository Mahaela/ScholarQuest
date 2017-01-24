import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs/Rx';
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
    private cursorStartPosition = new Subject<number[]>();
    public cursorStartPositionObs = this.cursorStartPosition.asObservable();
    private loaded = false;

    constructor() {
    }

    setName(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    setCoins(coins: number) {
        this.coins += coins;
        firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/coins').set(this.coins);
    }

    getCoins(): number {
        return this.coins;
    }

    setAvatar(avatar: number) {
        this.avatar = avatar;
        firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/avatar' ).set(avatar);
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

        firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/cursorFollower').set(index);
    }

    getCursorFollower(): number {
        return this.cursorFollower;
    }

    setCursor(index: number, xPos: number, yPos: number) {
        this.cursor = index;
        this.cursorStartPosition.next([index, xPos, yPos]);
        firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/cursor').set(index);
    }

    setUserInfo(): Observable<boolean> {
        var subject = new Subject<boolean>();
        this.getUserInfo().subscribe(userInfo => {
            this.name = userInfo.firstName;
            this.avatar = Number(userInfo.avatar);
            this.coins = Number(userInfo.coins);
            this.cursor = Number(userInfo.cursor);
            this.cursorFollower = Number(userInfo.cursorFollower);
            this.loaded = true;
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

    getLoaded():boolean {
        return this.loaded;
    }

    logout() {
        firebase.auth().signOut()
        this.name = '';
        this.coins = 0;
        this.avatar = 0;
        this.cursorStartPosition.next([0, 0, 0]);
        this.cursor = 0;
        this.cursorFollowerStartPosition.next([0, 0, 0]);
        this.cursorFollower = 0;
    }
}
