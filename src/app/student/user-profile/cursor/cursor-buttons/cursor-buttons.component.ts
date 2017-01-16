import { Component, OnInit } from '@angular/core';
import { CursorService } from '../cursor.service.ts';

@Component({
  selector: 'sq-cursor-buttons',
  templateUrl: './cursor-buttons.component.html',
  styleUrls: ['./cursor-buttons.component.css']
})
export class CursorButtonsComponent implements OnInit {

    private buttonImgs: string[];

    constructor(private cursorService: CursorService) {
        this.buttonImgs = cursorService.getCursors();
    }

  ngOnInit() {
  }

}
