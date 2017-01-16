import { Component, ViewChild, Input, Renderer, OnChanges } from '@angular/core';
import { StudentService } from '../../../student.service';
import { CursorService } from '../cursor.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'sq-cursor-display',
  templateUrl: './cursor-display.component.html',
  styleUrls: ['./cursor-display.component.css']
})
export class CursorDisplayComponent implements OnChanges {
    @ViewChild('cursor') cursor;
    @Input() xPos;
    @Input() yPos;
    private cursorIndex: number = 0;
    private displayedCursor: string;
    private cursors: string[];
    subscription: Subscription;

    constructor(private renderer: Renderer, private studentService: StudentService, private cursorService: CursorService) {
        this.cursors = cursorService.getCursors();
        this.cursorIndex = this.studentService.getCursor()
        this.displayedCursor = this.cursors[this.cursorIndex];
        this.subscription = this.studentService.cursorObs.subscribe(index => this.changeCursor(index));
    }

    ngOnChanges() {
        if (this.cursor != 'undefined' && this.cursorIndex != 0) { 
            this.renderer.setElementStyle(this.cursor.nativeElement, 'left', this.xPos - 10 + 'px');
            this.renderer.setElementStyle(this.cursor.nativeElement, 'top', this.yPos - 5 + 'px');
        }        
    }

    changeCursor(index: number) {
        this.cursorIndex = index;
        this.displayedCursor = this.cursors[index];
    }

}
