import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

declare var firebase;

@Injectable()
export class StudentService {
    private name = '';
    private avatar = 0;
    private coins = new BehaviorSubject<number>(0);
    public coinsObs = this.coins.asObservable();
    private cursorFollowerStartXPos = 0;
    private cursorFollowerStartYPos = 0;
    private cursorFollowerStartPosition = new BehaviorSubject<number[]>([0, 0, 0]);
    public cursorFollowerStartPositionObs = this.cursorFollowerStartPosition.asObservable();
    private cursorStartPosition = new BehaviorSubject<number[]>([0, 0, 0]);
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
        this.coins.next(this.coins.value + coins)
        firebase.database().ref('/users/student' + firebase.auth().currentUser.uid + '/coins').set(this.coins.value);
    }


    setAvatar(avatar: number) {
        this.avatar = avatar;
        firebase.database().ref('/users/student' + firebase.auth().currentUser.uid + '/avatar' ).set(avatar);
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

        firebase.database().ref('/users/student' + firebase.auth().currentUser.uid + '/cursorFollower').set(index);
    }

    getCursorFollower(): number {
        return this.cursorFollowerStartPosition.value[0];
    }

    setCursor(index: number, xPos: number, yPos: number) {
        this.cursorStartPosition.next([index, xPos, yPos]);
        firebase.database().ref('/users/student' + firebase.auth().currentUser.uid + '/cursor').set(index);
    }

    setUserInfo(): Observable<boolean> {
        var subject = new Subject<boolean>();
        this.getUserInfo().subscribe(userInfo => {
            this.name = userInfo.firstName;
            this.avatar = Number(userInfo.avatar);
            this.coins.next(Number(userInfo.coins));
            this.cursorStartPosition.next([Number(userInfo.cursor), 0, 0]);
            this.cursorFollowerStartPosition.next([Number(userInfo.cursorFollower), 0, 0]);
            this.loaded = true;
            subject.next(true);
        });
            return subject.asObservable();
    }

    getUserInfo(): Observable<any> {
        var subject = new Subject<any>();
        var userId = firebase.auth().currentUser.uid;
        firebase.database().ref('/users/student' + userId).once('value').then(function (snapshot) {
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
        this.coins.next(0);
        this.avatar = 0;
        this.cursorStartPosition.next([0, 0, 0]);
        this.cursorFollowerStartPosition.next([0, 0, 0]);
    }
}
