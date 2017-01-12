import { Component, ElementRef, Renderer, ViewChild } from '@angular/core';
import { StudentService } from '../../student.service';

@Component({
  selector: 'sq-cursor-follower',
  templateUrl: './cursor-follower.component.html',
  styleUrls: ['./cursor-follower.component.css']
})
export class CursorFollowerComponent  {
    private cursorFollower0 = '../../../assets/clip-art/None.png';
    private cursorFollower1 = '../../../assets/cursor-followers/EyesFollower.jpg';
    private cursorFollowers = [this.cursorFollower0, this.cursorFollower1];
    private activeCursorFollower: number;

    constructor(private renderer: Renderer, private studentService: StudentService) {
        this.activeCursorFollower = studentService.getCursorFollower();
    }

    changeCursorFollower(i) {
        this.activeCursorFollower = i;
        this.studentService.setCursorFollower(i);
    }

}
