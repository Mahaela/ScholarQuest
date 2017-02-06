import { Component } from '@angular/core';

import { StudentService } from '../../../student.service';
import { CursorFollowerService } from '../cursor-follower.service';

@Component({
    selector: 'sq-cursor-follower-buttons',
    templateUrl: './cursor-follower-buttons.component.html',
    styleUrls: ['./cursor-follower-buttons.component.css'],
})
export class CursorFollowerButtonsComponent {
    private buttonImgs: string[];

    constructor(private cursorFollowerService: CursorFollowerService, private studentService: StudentService) {
        this.buttonImgs = this.cursorFollowerService.getCursorFollowerImages();
    }

    changeCursorFollower(index: number) {
        this.studentService.setCursorFollower(index, event.clientX, event.clientY);
    }

}
