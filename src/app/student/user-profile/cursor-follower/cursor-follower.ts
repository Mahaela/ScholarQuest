import { Component } from '@angular/core';
import { EyesComponent } from './eyes/eyes.component';

export class CursorFollower {
    
  constructor(private img: string, private comp: Component) { }

  getImg(): string{
      return this.img;
  }

  getComponent(): Component {
      return this.comp;
  }

}