import { Component, HostListener, EventEmitter, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import 'rxjs/Rx'; 

@Component({
  selector: 'sq-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
    private xPos;
    private yPos;
    @ViewChild('canvas') canvas: ElementRef;

    constructor() { }

    ngAfterViewInit() {
        this.canvas.nativeElement.style.width = window.innerWidth + "px";
        this.canvas.nativeElement.style.height = window.innerHeight + "px";
    }

    @HostListener('mousemove', ['$event'])
    onMousemove(event: MouseEvent) {
        this.xPos = event.clientX;
        this.yPos = event.clientY;
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
         this.canvas.nativeElement.style.width = window.innerWidth + "px";
         this.canvas.nativeElement.style.height = window.innerHeight +"px";
    }

    
}
