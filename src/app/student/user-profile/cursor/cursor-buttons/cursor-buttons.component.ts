import { Component, OnInit } from '@angular/core';

import { CursorService } from '../cursor.service';
import { StudentService } from '../../../student.service';

@Component({
  selector: 'sq-cursor-buttons',
  templateUrl: './cursor-buttons.component.html',
  styleUrls: ['./cursor-buttons.component.css']
})
export class CursorButtonsComponent {

    private buttonImgs: string[];

    constructor(private cursorService: CursorService, private studentService: StudentService) {
        this.buttonImgs = cursorService.getCursors();
    }

    changeCursor(i: number) {
        this.studentService.setCursor(i, event['clientX'], event['clientY']).subscribe();
    }

}
