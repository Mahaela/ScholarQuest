import { Directive, ElementRef, Input, OnInit, Renderer, HostListener } from '@angular/core';

import { StudentService } from '../../../student.service';

@Directive({
  selector: '[sqHighlightCursorFollower]'
})
export class HighlightCursorFollowerDirective implements OnInit {

    @Input() index: number;
    constructor(private elementRef: ElementRef, private renderer: Renderer, private studentService: StudentService) {}

    ngOnInit() {
        
        if (this.studentService.getCursorFollower() == this.index) {
            this.renderer.setElementAttribute(this.elementRef.nativeElement, 'id', 'selected');
        }
    }

    @HostListener('mouseenter')
    onMouseEnter(event: MouseEvent) {
        if (this.studentService.getCursorFollower() != this.index) {
            this.renderer.setElementAttribute(this.elementRef.nativeElement, 'id', 'hovering');
        }
    }

    @HostListener('mouseleave')
    onMouseLeave(event: MouseEvent) {
        if (this.studentService.getCursorFollower() != this.index) {
            this.renderer.setElementAttribute(this.elementRef.nativeElement, 'id', null);
        }
    }
    @HostListener('click')
    onclick() {
        var prevSelected = document.getElementById('selected');
        this.renderer.setElementAttribute(prevSelected, 'id', null);
        this.renderer.setElementAttribute(this.elementRef.nativeElement, 'id', 'selected');
    }
}
