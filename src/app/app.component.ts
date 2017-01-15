import { Component, HostListener, EventEmitter, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { StudentService } from './student/student.service';

@Component({
  selector: 'sq-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
    private xPos = 0;
    private yPos = 0;
    private cursorFollower = '0';
    @ViewChild('canvas') canvas: ElementRef;
    
    constructor(private studentService: StudentService) { }

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
