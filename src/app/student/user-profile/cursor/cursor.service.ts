import { Injectable } from '@angular/core';

@Injectable()
export class CursorService {
    private cursor0 = '../../../assets/clip-art/None.png';
    private cursor1 = '../../../assets/cursors/BlueCursorHalo.png';
    private cursor2 = '../../../assets/cursors/GreenCursorHalo.png';
    private cursor3 = '../../../assets/cursors/RedCursorHalo.png';
    private cursor4 = '../../../assets/cursors/YellowCursorHalo.png';

    private cursors = [this.cursor0, this.cursor1];
  constructor() { }

  getCursors(): string[]{
      return this.cursors;
  }
}
