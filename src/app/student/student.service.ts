import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {
    private key = '';
    private name = '';
    private coins = '';
    private avatar = '';
    private cursor = '';
    private cursorFollower = '';

    constructor() { }

    setName(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    setCoins() { }

    getCoins() { }

    setAvatar() { }

    getAvatar() { }

    setCursor() { }

    getCursor() { }

    setCursorFollower() { }

    getCursorFollower() { }

    setUserInfo(userInfo: any) {
        this.name = userInfo['first'];
        this.coins = userInfo['coins'];
        this.avatar = userInfo['avatar'];
        this.cursor = userInfo['cursor'];
        this.cursorFollower = userInfo['cursorFollower'];
    }

    logout() {
        this.name = '';
        this.coins = '';
        this.avatar = '';
        this.cursor = '';
        this.cursorFollower = '';
    }
}
