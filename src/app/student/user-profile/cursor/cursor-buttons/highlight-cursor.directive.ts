import { Directive, ElementRef, Input, Renderer, HostListener } from '@angular/core';

import { StudentService } from '../../../student.service';

@Directive({
    selector: '[sqHighlightCursor]',
})
export class HighlightCursorDirective {
    @Input() index: number;

    constructor(private elementRef: ElementRef, private renderer: Renderer, private studentService: StudentService) {
    }

    ngOnInit() {
        if (this.studentService.getCursor() == this.index) {
            this.renderer.setElementAttribute(this.elementRef.nativeElement, 'id', 'selectedCursor');
        }
    }

    @HostListener('mouseenter')
    onMouseEnter(event: MouseEvent) {
        if (this.studentService.getCursor() != this.index) {
            this.renderer.setElementAttribute(this.elementRef.nativeElement, 'id', 'hoveringCursor');
        }
    }

    @HostListener('mouseleave')
    onMouseLeave(event: MouseEvent) {
        if (this.studentService.getCursor() != this.index) {
            this.renderer.setElementAttribute(this.elementRef.nativeElement, 'id', null);
        }
    }
    @HostListener('click')
    onclick($event) {
        var prevSelected = document.getElementById('selectedCursor');
        this.renderer.setElementAttribute(prevSelected, 'id', null);
        this.renderer.setElementAttribute(this.elementRef.nativeElement, 'id', 'selectedCursor');
    }

}


