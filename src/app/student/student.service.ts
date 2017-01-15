import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class StudentService {
    private key = '';
    private name = '';
    private coins = 0;
    private avatar = 0;
    private cursor = 0;
    private cursorFollower = new BehaviorSubject<number>(0);
    public cursorFollowerObs = this.cursorFollower.asObservable();

    constructor(private http: Http) {
    }

    setKey(key: string) {
        this.key = key;
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
        this.avatar = Number(avatar);
        var URL = 'https://scholar-quest.firebaseio.com/AccountsUnverified/' + this.key + '/avatar.json';
        const body = JSON.stringify(this.avatar);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(URL, body, { headers: headers }).subscribe();
    }

    getAvatar(): number {
        return this.avatar;
    }

    setCursor(cursor: string) {
        this.cursor = Number(cursor);
    }

    getCursor(): number {
        return this.cursor;
    }

    setCursorFollower(cursorFollower) {
        this.cursorFollower.next(cursorFollower);
        var URL = 'https://scholar-quest.firebaseio.com/AccountsUnverified/' + this.key + '/cursorFollower.json';
        const body = JSON.stringify(this.cursorFollower.value);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(URL, body, { headers: headers }).subscribe();
    }

    getCursorFollower(): number {
        return this.cursorFollower.value;
    }

    setUserInfo(userInfo: any, key: string) {
        this.name = userInfo['first'];
        this.coins = Number(userInfo['coins']);
        this.avatar = Number(userInfo['avatar']);
        this.cursor = Number(userInfo['cursor']);
        this.cursorFollower.next(Number(userInfo['cursorFollower']));
        this.key = key;
    }

    logout() {
        this.name = '';
        this.coins = 0;
        this.avatar = 0;
        this.cursor = 0;
        this.cursorFollower.next(0);
        this.key = '';
    }
}
