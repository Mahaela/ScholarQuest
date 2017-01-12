import { Directive, ElementRef, Input, OnInit, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[sqHighlightCursorFollower]'
})
export class HighlightCursorFollowerDirective implements OnInit {

    @Input() otherCursorFollowers;
    @Input() index: number;
    @Input() activeCursorFollower: number;
    constructor(private elementRef: ElementRef, private renderer: Renderer) {}

    ngOnInit() {
        if (this.activeCursorFollower == this.index) {
            this.renderer.setElementStyle(this.elementRef.nativeElement, 'background', 'green');
            elem.nativeElement.setAttribute('id', 'selected');
            console.log(this.otherCursorFollowers);
        }
    }

    @HostListener('mouseenter')
    onMouseEnter(event: MouseEvent) {
        if (this.activeCursorFollower != this.index) {
            this.renderer.setElementStyle(this.elementRef.nativeElement, 'background', 'blue');
        }
    }

    @HostListener('mouseleave')
    onMouseLeave(event: MouseEvent) {
        if (this.activeCursorFollower != this.index) {
            this.renderer.setElementStyle(this.elementRef.nativeElement, 'background', 'none');
        }
    }
    @HostListener('click')
    onclick() {
        console.log(document.getElementById('selected');
    }
}
