import { Component, Injectable } from '@angular/core';
import { CursorFollower } from './cursor-follower';
import { EyesComponent } from './eyes/eyes.component';

@Injectable()
export class CursorFollowerService {
    private cursorFollower0: CursorFollower;
    private cursorFollower1: CursorFollower;
    private cursorFollowers: CursorFollower[] = [];

    constructor() {
        this.cursorFollower0 = new CursorFollower('../../../assets/clip-art/None.png', null);
        this.cursorFollower1 = new CursorFollower('../../../assets/cursor-followers/EyesFollower.jpg', EyesComponent);
        
        this.cursorFollowers.push(this.cursorFollower0);
        this.cursorFollowers.push(this.cursorFollower1);
    }

    getCursorFollowerImages(): string[] {
        var cursorFollowerImgs: string[] = [];
        for (let i in this.cursorFollowers) {
            cursorFollowerImgs.push(this.cursorFollowers[i].getImg());
        }
        return cursorFollowerImgs;
    }

    getCursorFollowerComponents(): Component[] {
        var cursorFollowerComponents: Component[] = [];
        for (let i in this.cursorFollowers) {
            cursorFollowerComponents.push(this.cursorFollowers[i].getComponent());
        }
        return cursorFollowerComponents;
    }

}
